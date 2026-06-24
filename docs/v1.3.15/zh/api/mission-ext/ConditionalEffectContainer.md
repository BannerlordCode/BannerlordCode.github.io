<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConditionalEffectContainer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConditionalEffectContainer

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class ConditionalEffectContainer : List<MPConditionalEffect>`
**Base:** `List<MPConditionalEffect>`
**领域:** mission-ext

## 概述

`ConditionalEffectContainer` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Conditions` | `public MBReadOnlyList<MPPerkCondition> Conditions { get; }` |
| `Effects` | `public MBReadOnlyList<MPPerkEffectBase> Effects { get; }` |
| `EventFlags` | `public MPPerkCondition.PerkEventFlags EventFlags { get; }` |
| `IsTickRequired` | `public bool IsTickRequired { get; }` |
| `IsSatisfied` | `public bool IsSatisfied { get; set; }` |

## 主要方法

### Check
`public bool Check(MissionPeer peer)`

**用途 / Purpose:** 处理 `check` 相关逻辑。

### Check
`public bool Check(Agent agent)`

**用途 / Purpose:** 处理 `check` 相关逻辑。

### OnEvent
`public void OnEvent(bool isWarmup, MissionPeer peer, MPConditionalEffect.ConditionalEffectContainer container)`

**用途 / Purpose:** 当 `event` 事件触发时调用此方法。

### OnEvent
`public void OnEvent(bool isWarmup, Agent agent, MPConditionalEffect.ConditionalEffectContainer container)`

**用途 / Purpose:** 当 `event` 事件触发时调用此方法。

### OnTick
`public void OnTick(bool isWarmup, MissionPeer peer, int tickCount)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### GetState
`public bool GetState(MPConditionalEffect conditionalEffect, Agent agent)`

**用途 / Purpose:** 获取 `state` 的当前值。

### SetState
`public void SetState(MPConditionalEffect conditionalEffect, Agent agent, bool state)`

**用途 / Purpose:** 设置 `state` 的值或状态。

### ResetStates
`public void ResetStates()`

**用途 / Purpose:** 将 `states` 重置为初始状态。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 ConditionalEffectContainer 实例，再调用它的公开方法
var value = new ConditionalEffectContainer();
value.Check(peer);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
