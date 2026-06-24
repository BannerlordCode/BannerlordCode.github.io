<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeEventManager`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeEventManager

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEventManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Siege/SiegeEventManager.cs`

## 概述

`SiegeEventManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SiegeEventManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SiegeEvents` | `public MBReadOnlyList<SiegeEvent> SiegeEvents { get; }` |

## 主要方法

### StartSiegeEvent
`public SiegeEvent StartSiegeEvent(Settlement settlement, MobileParty besiegerParty)`

**用途 / Purpose:** 处理 `start siege event` 相关逻辑。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnAfterLoad
`public void OnAfterLoad()`

**用途 / Purpose:** 当 `after load` 事件触发时调用此方法。

## 使用示例

```csharp
var manager = SiegeEventManager.Current;
```

## 参见

- [完整类目录](../catalog)