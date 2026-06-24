<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent.cs`

## 概述

`ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var component = agent.GetComponent<ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent>();
```

## 参见

- [完整类目录](../catalog)