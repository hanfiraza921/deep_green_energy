import os
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://solar-subsidy-check-2.preview.emergentagent.com').rstrip('/')


def test_root():
    r = requests.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert "message" in r.json()


def test_create_lead_valid():
    payload = {"name": "TEST_User", "phone": "9876543210", "monthly_bill": "2500", "source": "lead_form"}
    r = requests.post(f"{BASE_URL}/api/leads", json=payload)
    assert r.status_code == 201, r.text
    data = r.json()
    assert data["name"] == "TEST_User"
    assert data["phone"] == "9876543210"
    assert data["source"] == "lead_form"
    assert "id" in data
    assert "_id" not in data


def test_create_lead_invalid_phone():
    r = requests.post(f"{BASE_URL}/api/leads", json={"name": "Bad", "phone": "12345", "monthly_bill": "100"})
    assert r.status_code in (400, 422)


def test_list_leads_no_id_leak():
    # create one
    requests.post(f"{BASE_URL}/api/leads", json={"name": "TEST_List", "phone": "9123456780", "monthly_bill": "1500"})
    r = requests.get(f"{BASE_URL}/api/leads")
    assert r.status_code == 200
    rows = r.json()
    assert isinstance(rows, list)
    assert len(rows) >= 1
    for row in rows[:5]:
        assert "_id" not in row
        assert "id" in row


def test_lead_stats():
    r = requests.get(f"{BASE_URL}/api/leads/stats")
    assert r.status_code == 200
    data = r.json()
    assert "total_leads" in data
    assert isinstance(data["total_leads"], int)


def test_eligibility_modal_source():
    payload = {"name": "TEST_Elig", "phone": "9999988888", "monthly_bill": "Below ₹1,500",
               "rooftop_type": "Independent House", "system_size": "300 - 500 sqft",
               "source": "eligibility_modal"}
    r = requests.post(f"{BASE_URL}/api/leads", json=payload)
    assert r.status_code == 201
    assert r.json()["source"] == "eligibility_modal"
