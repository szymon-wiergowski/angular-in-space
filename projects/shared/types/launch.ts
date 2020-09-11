export interface Launch {
  id: number;
  missionPatch: string;
  missionName: string;
  rocketName: string;
  success: boolean;
  launchDate: string;
  launchSiteName: string;
  details: string;
  links: {
    videoLink: string;
    presskitLink: string;
    articleLink: string;
    wikipediaLink: string;
  };
}
