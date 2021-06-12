export interface LineResponse {
  idx: number;
  name: string;
  color: string;
  upStation: number;
  downStation: number;
  distance: number;
  duration: number;
}

export interface LineRequest {
  name: string;
  color: string;
  upStation: number;
  downStation: number;
  distance: number;
  duration: number;
}
