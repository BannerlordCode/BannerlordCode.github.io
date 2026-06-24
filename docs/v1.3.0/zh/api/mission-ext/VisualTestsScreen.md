<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VisualTestsScreen`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# VisualTestsScreen

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VisualTestsScreen : ScreenBase`
**Base:** `ScreenBase`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VisualTestsScreen.cs`

## 概述

`VisualTestsScreen` 位于 `TaleWorlds.MountAndBlade.View.Screens`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Screens` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### StartedRendering
`public bool StartedRendering()`

**用途 / Purpose:** 处理 `started rendering` 相关逻辑。

### GetSubTestName
`public string GetSubTestName(VisualTestsScreen.CameraPointTestType type)`

**用途 / Purpose:** 获取 `sub test name` 的当前值。

### GetRenderMode
`public Utilities.EngineRenderDisplayMode GetRenderMode(VisualTestsScreen.CameraPointTestType type)`

**用途 / Purpose:** 获取 `render mode` 的当前值。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

## 使用示例

```csharp
var value = new VisualTestsScreen();
value.StartedRendering();
```

## 参见

- [完整类目录](../catalog)