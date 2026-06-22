<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AvatarServices`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AvatarServices

**命名空间:** TaleWorlds.Avatar.PlayerServices
**模块:** TaleWorlds.Avatar
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`AvatarServices` 是 `TaleWorlds.Avatar.PlayerServices` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ForcedAvatarCount` | `public static int ForcedAvatarCount { get; }` |


## 主要方法

### GetForcedAvatarIndexOfPlayer

```csharp
public static int GetForcedAvatarIndexOfPlayer(PlayerId playerID)
```

### UpdateAvatarServices

```csharp
public static void UpdateAvatarServices(float dt)
```

### GetPlayerAvatar

```csharp
public static AvatarDataResponse GetPlayerAvatar(PlayerId playerId, int forcedIndex)
```

### AddAvatarService

```csharp
public static void AddAvatarService(PlayerIdProvidedTypes type, IAvatarService avatarService)
```

### ClearAvatarCaches

```csharp
public static void ClearAvatarCaches()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)