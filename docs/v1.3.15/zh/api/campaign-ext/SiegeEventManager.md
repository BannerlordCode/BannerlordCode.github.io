<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeEventManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeEventManager

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEventManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Siege/SiegeEventManager.cs`

## 概述

`SiegeEventManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `SiegeEvents` | `public MBReadOnlyList<SiegeEvent> SiegeEvents { get; }` |

## 主要方法

### StartSiegeEvent
```csharp
public SiegeEvent StartSiegeEvent(Settlement settlement, MobileParty besiegerParty)
```

### Tick
```csharp
public void Tick(float dt)
```

### OnAfterLoad
```csharp
public void OnAfterLoad()
```

## 使用示例

```csharp
// SiegeEventManager (Manager) 的典型用法
SiegeEventManager.Current;
```

## 参见

- [完整类目录](../catalog)