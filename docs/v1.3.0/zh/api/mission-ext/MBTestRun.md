<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBTestRun`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBTestRun

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBTestRun`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBTestRun.cs`

## 概述

`MBTestRun` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### EnterEditMode
`public static bool EnterEditMode()`

**用途 / Purpose:** 处理 `enter edit mode` 相关逻辑。

### NewScene
`public static bool NewScene()`

**用途 / Purpose:** 处理 `new scene` 相关逻辑。

### LeaveEditMode
`public static bool LeaveEditMode()`

**用途 / Purpose:** 处理 `leave edit mode` 相关逻辑。

### OpenScene
`public static bool OpenScene(string sceneName)`

**用途 / Purpose:** 处理 `open scene` 相关逻辑。

### CloseScene
`public static bool CloseScene()`

**用途 / Purpose:** 处理 `close scene` 相关逻辑。

### SaveScene
`public static bool SaveScene()`

**用途 / Purpose:** 保存 `scene` 数据。

### OpenDefaultScene
`public static bool OpenDefaultScene()`

**用途 / Purpose:** 处理 `open default scene` 相关逻辑。

### GetFPS
`public static int GetFPS()`

**用途 / Purpose:** 获取 `f p s` 的当前值。

### StartMission
`public static void StartMission()`

**用途 / Purpose:** 处理 `start mission` 相关逻辑。

## 使用示例

```csharp
MBTestRun.EnterEditMode();
```

## 参见

- [完整类目录](../catalog)