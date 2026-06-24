<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBGlobals`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBGlobals

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBGlobals`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBGlobals.cs`

## 概述

`MBGlobals` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### InitializeReferences
`public static void InitializeReferences()`

**用途 / Purpose:** 初始化 `references` 的状态、资源或绑定。

### GetActionSetWithSuffix
`public static MBActionSet GetActionSetWithSuffix(Monster monster, bool isFemale, string suffix)`

**用途 / Purpose:** 获取 `action set with suffix` 的当前值。

### GetActionSet
`public static MBActionSet GetActionSet(string actionSetCode)`

**用途 / Purpose:** 获取 `action set` 的当前值。

## 使用示例

```csharp
MBGlobals.InitializeReferences();
```

## 参见

- [完整类目录](../catalog)