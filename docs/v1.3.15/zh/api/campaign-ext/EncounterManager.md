<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncounterManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncounterManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class EncounterManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/EncounterManager.cs`

## 概述

`EncounterManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `EncounterModel` | `public static EncounterModel EncounterModel { get; }` |

## 主要方法

### Tick
```csharp
public static void Tick(float dt)
```

### HandleEncounterForMobileParty
```csharp
public static void HandleEncounterForMobileParty(MobileParty mobileParty, float dt)
```

### StartPartyEncounter
```csharp
public static void StartPartyEncounter(PartyBase attackerParty, PartyBase defenderParty)
```

### StartSettlementEncounter
```csharp
public static void StartSettlementEncounter(MobileParty attackerParty, Settlement settlement)
```

## 使用示例

```csharp
// EncounterManager (Manager) 的典型用法
EncounterManager.Current;
```

## 参见

- [完整类目录](../catalog)