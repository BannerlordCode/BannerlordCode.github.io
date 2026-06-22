<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyComponent`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/PartyComponent.cs`

## 概述

`PartyComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<PartyComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

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
```csharp
public virtual void SetWagePaymentLimit(int newLimit)
```

### GetDefaultComponentBanner
```csharp
public abstract Banner GetDefaultComponentBanner()
```

### ClearCachedName
```csharp
public virtual void ClearCachedName()
```

### ChangePartyLeader
```csharp
public void ChangePartyLeader(Hero newLeader)
```

### GetMountAndHarnessVisualIdsForPartyIcon
```csharp
public virtual void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)
```

### OnPartyComponentCreatedDelegate
```csharp
public delegate void OnPartyComponentCreatedDelegate(MobileParty mobileParty)
```

## 使用示例

```csharp
// PartyComponent (Component) 的典型用法
agent.GetComponent<PartyComponent>();
```

## 参见

- [完整类目录](../catalog)