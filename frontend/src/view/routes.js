import Permissions from 'security/permissions';
import { i18n } from 'i18n';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    icon: 'home',
    label: i18n('home.menu'),
    menu: {
      exact: true,
    },
    loader: () => import('view/home/HomePage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
    menu: false,
  },

  {
    path: '/iam',
    loader: () => import('view/iam/list/IamPage'),
    permissionRequired: permissions.iamRead,
    exact: true,
    icon: 'user-add',
    label: i18n('iam.menu'),
    menu: true,
  },
  {
    path: '/iam/new',
    loader: () => import('view/iam/new/IamNewPage'),
    menu: false,
    permissionRequired: permissions.iamCreate,
    exact: true,
  },
  {
    path: '/iam/importer',
    loader: () =>
      import('view/iam/importer/IamImporterPage'),
    menu: false,
    permissionRequired: permissions.iamImport,
    exact: true,
  },
  {
    path: '/iam/:id/edit',
    loader: () => import('view/iam/edit/IamEditPage'),
    menu: false,
    permissionRequired: permissions.iamEdit,
    exact: true,
  },
  {
    path: '/iam/:id',
    loader: () => import('view/iam/view/IamViewPage'),
    menu: false,
    permissionRequired: permissions.iamRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    icon: 'file-search',
    label: i18n('auditLog.menu'),
    loader: () => import('view/auditLog/AuditLogPage'),
    menu: true,
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: 'setting',
    label: i18n('settings.menu'),
    loader: () => import('view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
    menu: true,
  },

  {
    path: '/walk',
    loader: () => import('view/walk/list/WalkListPage'),
    permissionRequired: permissions.walkRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.walk.menu'),
    menu: true,
  },
  {
    path: '/walk/new',
    loader: () => import('view/walk/form/WalkFormPage'),
    menu: false,
    permissionRequired: permissions.walkCreate,
    exact: true,
  },
  {
    path: '/walk/importer',
    loader: () =>
      import('view/walk/importer/WalkImporterPage'),
    menu: false,
    permissionRequired: permissions.walkImport,
    exact: true,
  },
  {
    path: '/walk/:id/edit',
    loader: () => import('view/walk/form/WalkFormPage'),
    menu: false,
    permissionRequired: permissions.walkEdit,
    exact: true,
  },
  {
    path: '/walk/:id',
    loader: () => import('view/walk/view/WalkViewPage'),
    menu: false,
    permissionRequired: permissions.walkRead,
    exact: true,
  },

  {
    path: '/pet',
    loader: () => import('view/pet/list/PetListPage'),
    permissionRequired: permissions.petRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.pet.menu'),
    menu: true,
  },
  {
    path: '/pet/new',
    loader: () => import('view/pet/form/PetFormPage'),
    menu: false,
    permissionRequired: permissions.petCreate,
    exact: true,
  },
  {
    path: '/pet/importer',
    loader: () =>
      import('view/pet/importer/PetImporterPage'),
    menu: false,
    permissionRequired: permissions.petImport,
    exact: true,
  },
  {
    path: '/pet/:id/edit',
    loader: () => import('view/pet/form/PetFormPage'),
    menu: false,
    permissionRequired: permissions.petEdit,
    exact: true,
  },
  {
    path: '/pet/:id',
    loader: () => import('view/pet/view/PetViewPage'),
    menu: false,
    permissionRequired: permissions.petRead,
    exact: true,
  },
];

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () => import('view/auth/ForgotPasswordPage'),
  },
];

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () => import('view/auth/EmptyPermissionsPage'),
  },
];

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () => import('view/auth/EmailUnverifiedPage'),
  },
];

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () => import('view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () => import('view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () => import('view/shared/errors/Error404Page'),
  },
];

export default {
  privateRoutes,
  publicRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
