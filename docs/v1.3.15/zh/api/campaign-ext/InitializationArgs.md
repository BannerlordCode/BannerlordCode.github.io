<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InitializationArgs`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InitializationArgs

**命名空间:** TaleWorlds.CampaignSystem.Party.PartyComponents
**模块:** TaleWorlds.CampaignSystem
**类型:** `class InitializationArgs`
**领域:** campaign-ext

## 概述

`InitializationArgs` 位于 `TaleWorlds.CampaignSystem.Party.PartyComponents`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Party.PartyComponents` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Hideout` | `public Hideout Hideout { get; }` |
| `IsBossParty` | `public bool IsBossParty { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## 主要方法

### CreateBanditParty
`public static MobileParty CreateBanditParty(string stringId, Clan clan, Hideout hideout, bool isBossParty, PartyTemplateObject pt, CampaignVec2 initialPosition)`

**用途 / Purpose:** 创建一个 `bandit party` 实例或对象。

### ConvertPartyToBanditParty
`public static void ConvertPartyToBanditParty(MobileParty mobileParty, Clan clan, Hideout hideout, bool isBossParty)`

**用途 / Purpose:** 处理 `convert party to bandit party` 相关逻辑。

### CreateLooterParty
`public static MobileParty CreateLooterParty(string stringId, Clan clan, Settlement relatedSettlement, bool isBossParty, PartyTemplateObject pt, CampaignVec2 initialPosition)`

**用途 / Purpose:** 创建一个 `looter party` 实例或对象。

### ConvertPartyToLooterParty
`public static void ConvertPartyToLooterParty(MobileParty mobileParty, Clan clan, Settlement relatedSettlement)`

**用途 / Purpose:** 处理 `convert party to looter party` 相关逻辑。

### SetHomeHideout
`public void SetHomeHideout(Hideout hideout)`

**用途 / Purpose:** 设置 `home hideout` 的值或状态。

### ClearCachedName
`public override void ClearCachedName()`

**用途 / Purpose:** 处理 `clear cached name` 相关逻辑。

### InitializeBanditOnCreation
`public void InitializeBanditOnCreation(MobileParty mobileParty)`

**用途 / Purpose:** 初始化 `bandit on creation` 的状态、资源或绑定。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
InitializationArgs.CreateBanditParty("example", clan, hideout, false, pt, initialPosition);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
