<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Program`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Program

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Program`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/Program.cs`

## 概述

`Program` 位于 `TaleWorlds.MountAndBlade.Launcher.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Launcher.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### NativeMain
`public static void NativeMain(string commandLine)`

**用途 / Purpose:** 处理 `native main` 相关逻辑。

### Main
`public static void Main(string args)`

**用途 / Purpose:** 处理 `main` 相关逻辑。

### StartGame
`public static void StartGame()`

**用途 / Purpose:** 处理 `start game` 相关逻辑。

### StartDigitalCompanion
`public static void StartDigitalCompanion()`

**用途 / Purpose:** 处理 `start digital companion` 相关逻辑。

### IsDigitalCompanionAvailable
`public static bool IsDigitalCompanionAvailable()`

**用途 / Purpose:** 处理 `is digital companion available` 相关逻辑。

## 使用示例

```csharp
Program.NativeMain("example");
```

## 参见

- [完整类目录](../catalog)