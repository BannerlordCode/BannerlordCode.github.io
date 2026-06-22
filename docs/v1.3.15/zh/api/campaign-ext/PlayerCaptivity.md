<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerCaptivity`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerCaptivity

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PlayerCaptivity` 是 `TaleWorlds.CampaignSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `CaptorParty` | `public static PartyBase CaptorParty { get; set; }` |
| `RandomNumber` | `public static float RandomNumber { get; set; }` |
| `IsCaptive` | `public static bool IsCaptive { get; }` |
| `CaptiveTimeInDays` | `public static int CaptiveTimeInDays { get; }` |
| `CaptivityStartTime` | `public static CampaignTime CaptivityStartTime { get; }` |
| `LastCheckTime` | `public static CampaignTime LastCheckTime { get; set; }` |


## 主要方法

### StartCaptivity

```csharp
public static void StartCaptivity(PartyBase captorParty)
```

### OnPlayerCharacterChanged

```csharp
public static void OnPlayerCharacterChanged()
```

### SetRansomAmount

```csharp
public void SetRansomAmount()
```

### EndCaptivity

```csharp
public static void EndCaptivity()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)