class Roles {
  static get values() {
    return {
      owner: 'owner',
      editor: 'editor',
      viewer: 'viewer',
      auditLogViewer: 'auditLogViewer',
      iamSecurityReviewer: 'iamSecurityReviewer',
      entityEditor: 'entityEditor',
      entityViewer: 'entityViewer',
      walkEditor: 'walkEditor',
      walkViewer: 'walkViewer',
      petEditor: 'petEditor',
      petViewer: 'petViewer',
    };
  }
}

module.exports = Roles;
