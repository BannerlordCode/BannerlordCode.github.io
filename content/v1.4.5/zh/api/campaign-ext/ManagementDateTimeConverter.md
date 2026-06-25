---
title: "ManagementDateTimeConverter"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagementDateTimeConverter`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementDateTimeConverter

**命名空间:** System.Management
**模块:** System.Management
**类型:** `public sealed class ManagementDateTimeConverter`
**领域:** campaign-ext

## 概述

`ManagementDateTimeConverter` 位于 `System.Management`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `System.Management` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ToDateTime
`public static DateTime ToDateTime(string dmtfDate)`

**用途 / Purpose:** 处理 `to date time` 相关逻辑。

### ToDmtfDateTime
`public static string ToDmtfDateTime(DateTime date)`

**用途 / Purpose:** 处理 `to dmtf date time` 相关逻辑。

### ToDmtfTimeInterval
`public static string ToDmtfTimeInterval(TimeSpan timespan)`

**用途 / Purpose:** 处理 `to dmtf time interval` 相关逻辑。

### ToTimeSpan
`public static TimeSpan ToTimeSpan(string dmtfTimespan)`

**用途 / Purpose:** 处理 `to time span` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
ManagementDateTimeConverter.ToDateTime("example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
