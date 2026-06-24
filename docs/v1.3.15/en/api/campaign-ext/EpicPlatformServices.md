<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EpicPlatformServices`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EpicPlatformServices

**Namespace:** TaleWorlds.PlatformService.Epic
**Module:** TaleWorlds.PlatformService
**Type:** `public class EpicPlatformServices : IPlatformServices`
**Base:** `IPlatformServices`
**File:** `TaleWorlds.PlatformService.Epic/EpicPlatformServices.cs`

## Overview

`EpicPlatformServices` lives in `TaleWorlds.PlatformService.Epic` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.Epic` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UserId` | `public string UserId { get; }` |
| `Name` | `public string Name { get; set; }` |
| `Value` | `public int Value { get; set; }` |
| `ErrorCode` | `public string ErrorCode { get; set; }` |
| `ErrorMessage` | `public string ErrorMessage { get; set; }` |
| `NumericErrorCode` | `public int NumericErrorCode { get; set; }` |
| `ErrorDescription` | `public string ErrorDescription { get; set; }` |
| `Error` | `public string Error { get; set; }` |
| `AccessToken` | `public string AccessToken { get; set; }` |
| `ExpiresIn` | `public int ExpiresIn { get; set; }` |
| `ExpiresAt` | `public DateTime ExpiresAt { get; set; }` |
| `TokenType` | `public string TokenType { get; set; }` |
| `RefreshToken` | `public string RefreshToken { get; set; }` |
| `RefreshExpires` | `public int RefreshExpires { get; set; }` |
| `RefreshExpiresAt` | `public DateTime RefreshExpiresAt { get; set; }` |
| `AccountId` | `public string AccountId { get; set; }` |
| `ClientId` | `public string ClientId { get; set; }` |
| `InternalClient` | `public bool InternalClient { get; set; }` |
| `ClientService` | `public string ClientService { get; set; }` |
| `DisplayName` | `public string DisplayName { get; set; }` |
| `App` | `public string App { get; set; }` |
| `InAppId` | `public string InAppId { get; set; }` |
| `DeviceId` | `public string DeviceId { get; set; }` |
| `ProductId` | `public string ProductId { get; set; }` |

## Key Methods

### Initialize
`public bool Initialize(IFriendListService additionalFriendListServices)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Terminate
`public void Terminate()`

**Purpose:** Handles logic related to `terminate`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### QueryDefinitions
`public void QueryDefinitions()`

**Purpose:** Handles logic related to `query definitions`.

### ShowGamepadTextInput
`public bool ShowGamepadTextInput(string descriptionText, string existingText, uint maxChars, bool isObfuscated)`

**Purpose:** Handles logic related to `show gamepad text input`.

## Usage Example

```csharp
var value = new EpicPlatformServices();
value.Initialize(additionalFriendListServices);
```

## See Also

- [Complete Class Catalog](../catalog)