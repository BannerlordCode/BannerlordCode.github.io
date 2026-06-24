<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyComponent`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyComponent`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/PartyComponent.cs`

## 概述

`PartyComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `PartyComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MobileParty` | `public MobileParty MobileParty { get; }` |
| `Party` | `public PartyBase Party { get; }` |
| `PartyOwner` | `public abstract Hero PartyOwner { get; }` |
| `Name` | `public abstract TextObject Name { get; }` |
| `HomeSettlement` | `public abstract Settlement HomeSettlement { get; }` |
| `AvoidHostileActions` | `public virtual bool AvoidHostileActions { get; }` |
| `WagePaymentLimit` | `public virtual int WagePaymentLimit { get; }` |
| `Leader` | `public virtual Hero Leader { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `CanHaveNavalNavigationCapability` | `public virtual bool CanHaveNavalNavigationCapability { get; }` |
| `CanHaveLandNavigationCapability` | `public virtual bool CanHaveLandNavigationCapability { get; }` |

## 主要方法

### SetWagePaymentLimit
`public virtual void SetWagePaymentLimit(int newLimit)`

**用途 / Purpose:** 设置 `wage payment limit` 的值或状态。

### GetDefaultComponentBanner
`public abstract Banner GetDefaultComponentBanner()`

**用途 / Purpose:** 获取 `default component banner` 的当前值。

### ClearCachedName
`public virtual void ClearCachedName()`

**用途 / Purpose:** 处理 `clear cached name` 相关逻辑。

### ChangePartyLeader
`public void ChangePartyLeader(Hero newLeader)`

**用途 / Purpose:** 处理 `change party leader` 相关逻辑。

### GetMountAndHarnessVisualIdsForPartyIcon
`public virtual void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)`

**用途 / Purpose:** 获取 `mount and harness visual ids for party icon` 的当前值。

### OnPartyComponentCreatedDelegate
`public delegate void OnPartyComponentCreatedDelegate(MobileParty mobileParty)`

**用途 / Purpose:** 当 `party component created delegate` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomPartyComponent();
```

## 参见

- [完整类目录](../catalog)