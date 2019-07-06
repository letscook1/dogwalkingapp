const Roles = require('./roles');
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
          roles.viewer,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,

          roles.walkEditor,
          roles.walkViewer,
          roles.petEditor,
          roles.petViewer,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.owner, roles.auditLogViewer, roles.viewer],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
      },
      walkImport: {
        id: 'walkImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.walkEditor,
        ],
      },
      walkCreate: {
        id: 'walkCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.walkEditor,
        ],
        allowedStorageFolders: ['walk'],
      },
      walkEdit: {
        id: 'walkEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.walkEditor,
        ],
        allowedStorageFolders: ['walk'],
      },
      walkDestroy: {
        id: 'walkDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.walkEditor,
        ],
        allowedStorageFolders: ['walk'],
      },
      walkRead: {
        id: 'walkRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.walkEditor,
          roles.walkViewer,
        ],
      },
      walkAutocomplete: {
        id: 'walkAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.walkEditor,
          roles.walkViewer,
          roles.petEditor,
          roles.petViewer,
        ],
      },

      petImport: {
        id: 'petImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.petEditor,
        ],
      },
      petCreate: {
        id: 'petCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.petEditor,
        ],
        allowedStorageFolders: ['pet'],
      },
      petEdit: {
        id: 'petEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.petEditor,
        ],
        allowedStorageFolders: ['pet'],
      },
      petDestroy: {
        id: 'petDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.petEditor,
        ],
        allowedStorageFolders: ['pet'],
      },
      petRead: {
        id: 'petRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.petEditor,
          roles.petViewer,
        ],
      },
      petAutocomplete: {
        id: 'petAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.petEditor,
          roles.petViewer,
          roles.walkEditor,
          roles.walkViewer,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

module.exports = Permissions;
