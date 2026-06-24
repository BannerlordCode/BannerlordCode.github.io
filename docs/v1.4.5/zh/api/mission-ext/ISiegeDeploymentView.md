<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ISiegeDeploymentView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ISiegeDeploymentView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** 无
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/ISiegeDeploymentView.cs`

## 概述

`ISiegeDeploymentView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `ISiegeDeploymentView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
ISiegeDeploymentView implementation = GetSiegeDeploymentViewImplementation();
```

## 参见

- [完整类目录](../catalog)