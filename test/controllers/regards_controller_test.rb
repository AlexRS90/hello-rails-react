require 'test_helper'

class RegardsControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get regards_index_url
    assert_response :success
  end
end
