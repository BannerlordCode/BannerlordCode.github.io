<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EpicPlatformServices`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EpicPlatformServices

**Namespace:** TaleWorlds.PlatformService.Epic
**Module:** TaleWorlds.PlatformService
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EpicPlatformServices` is a class in the `TaleWorlds.PlatformService.Epic` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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


## Key Methods

### Initialize

```csharp
public bool Initialize(IFriendListService additionalFriendListServices)
```

### Terminate

```csharp
public void Terminate()
```

### Tick

```csharp
public void Tick(float dt)
```

### QueryDefinitions

```csharp
public void QueryDefinitions()
```

### ShowGamepadTextInput

```csharp
public bool ShowGamepadTextInput(string descriptionText, string existingText, uint maxChars, bool isObfuscated)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)