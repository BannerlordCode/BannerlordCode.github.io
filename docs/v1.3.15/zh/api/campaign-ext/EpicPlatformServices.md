<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EpicPlatformServices`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EpicPlatformServices

**命名空间:** TaleWorlds.PlatformService.Epic
**模块:** TaleWorlds.PlatformService
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`EpicPlatformServices` 是 `TaleWorlds.PlatformService.Epic` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)