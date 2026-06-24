<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ICameraModeLogic`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ICameraModeLogic

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `class`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/ICameraModeLogic.cs`

## 概述

`ICameraModeLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `ICameraModeLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
ICameraModeLogic implementation = GetCameraModeLogicImplementation();
```

## 参见

- [完整类目录](../catalog)