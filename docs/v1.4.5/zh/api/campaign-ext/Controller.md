<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Controller`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Controller

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public static class Controller`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.DotNet/TaleWorlds.DotNet/Controller.cs`

## 概述

`Controller` 位于 `TaleWorlds.DotNet`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.DotNet` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OverrideManagedDllFolder
`public static void OverrideManagedDllFolder(IntPtr overridenFolderAsPointer)`

**用途 / Purpose:** 处理 `override managed dll folder` 相关逻辑。

### LoadOnCurrentApplicationDomain
`public static void LoadOnCurrentApplicationDomain(IntPtr gameDllNameAsPointer, IntPtr gameTypeNameAsPointer, int currentEngineAsInteger, int currentPlatformAsInteger)`

**用途 / Purpose:** 加载 `on current application domain` 数据。

### SetEngineMethodsAsMono
`public static void SetEngineMethodsAsMono(IntPtr passControllerMethods, IntPtr passManagedInitializeMethod, IntPtr passManagedCallbackMethod)`

**用途 / Purpose:** 设置 `engine methods as mono` 的值或状态。

### SetEngineMethodsAsHostedDotNetCore
`public static void SetEngineMethodsAsHostedDotNetCore(IntPtr passControllerMethods, IntPtr passManagedInitializeMethod, IntPtr passManagedCallbackMethod)`

**用途 / Purpose:** 设置 `engine methods as hosted dot net core` 的值或状态。

### SetEngineMethodsAsDotNet
`public static void SetEngineMethodsAsDotNet(Delegate passControllerMethods, Delegate passManagedInitializeMethod, Delegate passManagedCallbackMethod)`

**用途 / Purpose:** 设置 `engine methods as dot net` 的值或状态。

## 使用示例

```csharp
Controller.OverrideManagedDllFolder(overridenFolderAsPointer);
```

## 参见

- [完整类目录](../catalog)