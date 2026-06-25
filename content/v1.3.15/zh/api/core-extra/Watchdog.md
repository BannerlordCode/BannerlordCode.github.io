---
title: "Watchdog"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Watchdog`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Watchdog

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** `public class Watchdog`
**领域:** core-extra

## 概述

`Watchdog` 位于 `TaleWorlds.Library`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetDumpDirectory
`public static void SetDumpDirectory(string Path)`

**用途 / Purpose:** 设置 `dump directory` 的值或状态。

### DetachAndClose
`public static void DetachAndClose()`

**用途 / Purpose:** 处理 `detach and close` 相关逻辑。

### LogProperty
`public static void LogProperty(string FileName, string GroupName, string Key, string Value)`

**用途 / Purpose:** 处理 `log property` 相关逻辑。

### Attached
`public static bool Attached()`

**用途 / Purpose:** 处理 `attached` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
Watchdog.SetDumpDirectory("example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
