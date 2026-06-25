---
title: "ConsolesModuleExtension"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConsolesModuleExtension`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ConsolesModuleExtension

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConsolesModuleExtension : IPlatformModuleExtension`
**Base:** `IPlatformModuleExtension`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ConsolesModuleExtension.cs`

## 概述

`ConsolesModuleExtension` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public void Initialize(List<string> args)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### GetModulePaths
`public string GetModulePaths()`

**用途 / Purpose:** 获取 `module paths` 的当前值。

### Destroy
`public void Destroy()`

**用途 / Purpose:** 处理 `destroy` 相关逻辑。

### SetLauncherMode
`public void SetLauncherMode(bool isLauncherModeActive)`

**用途 / Purpose:** 设置 `launcher mode` 的值或状态。

### CheckEntitlement
`public bool CheckEntitlement(string title)`

**用途 / Purpose:** 处理 `check entitlement` 相关逻辑。

## 使用示例

```csharp
var value = new ConsolesModuleExtension();
value.Initialize(args);
```

## 参见

- [完整类目录](../catalog)