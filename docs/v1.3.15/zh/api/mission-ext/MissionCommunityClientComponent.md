<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionCommunityClientComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionCommunityClientComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCommunityClientComponent : MissionLobbyComponent`
**Base:** `MissionLobbyComponent`
**File:** `TaleWorlds.MountAndBlade/MissionCommunityClientComponent.cs`

## 概述

`MissionCommunityClientComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MissionCommunityClientComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### SetServerEndingBeforeClientLoaded
`public void SetServerEndingBeforeClientLoaded(bool isServerEndingBeforeClientLoaded)`

**用途 / Purpose:** 设置 `server ending before client loaded` 的值或状态。

### QuitMission
`public override void QuitMission()`

**用途 / Purpose:** 处理 `quit mission` 相关逻辑。

## 使用示例

```csharp
var component = agent.GetComponent<MissionCommunityClientComponent>();
```

## 参见

- [完整类目录](../catalog)