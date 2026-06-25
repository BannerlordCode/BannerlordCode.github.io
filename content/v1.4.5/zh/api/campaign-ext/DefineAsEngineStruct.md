---
title: "DefineAsEngineStruct"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefineAsEngineStruct`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefineAsEngineStruct

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public class DefineAsEngineStruct : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/TaleWorlds.DotNet/TaleWorlds.DotNet/DefineAsEngineStruct.cs`

## 概述

`DefineAsEngineStruct` 位于 `TaleWorlds.DotNet`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.DotNet` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Type` | `public Type Type { get; set; }` |
| `EngineType` | `public string EngineType { get; set; }` |
| `IgnoreMemberOffsetTest` | `public bool IgnoreMemberOffsetTest { get; set; }` |
| `EngineEnumPrefix` | `public string EngineEnumPrefix { get; set; }` |
| `Conditionals` | `public string Conditionals { get; set; }` |

## 使用示例

```csharp
var example = new DefineAsEngineStruct();
```

## 参见

- [完整类目录](../catalog)