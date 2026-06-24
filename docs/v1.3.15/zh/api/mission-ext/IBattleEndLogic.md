<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IBattleEndLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IBattleEndLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/IBattleEndLogic.cs`

## 概述

`IBattleEndLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `IBattleEndLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
IBattleEndLogic implementation = GetBattleEndLogicImplementation();
```

## 参见

- [完整类目录](../catalog)