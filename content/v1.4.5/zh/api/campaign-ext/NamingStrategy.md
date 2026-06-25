---
title: "NamingStrategy"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NamingStrategy`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NamingStrategy

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public abstract class NamingStrategy`
**Base:** 无
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/NamingStrategy.cs`

## 概述

`NamingStrategy` 位于 `Newtonsoft.Json.Serialization`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json.Serialization` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ProcessDictionaryKeys` | `public bool ProcessDictionaryKeys { get; set; }` |
| `ProcessExtensionDataNames` | `public bool ProcessExtensionDataNames { get; set; }` |
| `OverrideSpecifiedNames` | `public bool OverrideSpecifiedNames { get; set; }` |

## 主要方法

### GetPropertyName
`public virtual string GetPropertyName(string name, bool hasSpecifiedName)`

**用途 / Purpose:** 获取 `property name` 的当前值。

### GetExtensionDataName
`public virtual string GetExtensionDataName(string name)`

**用途 / Purpose:** 获取 `extension data name` 的当前值。

### GetDictionaryKey
`public virtual string GetDictionaryKey(string key)`

**用途 / Purpose:** 获取 `dictionary key` 的当前值。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomNamingStrategy();
```

## 参见

- [完整类目录](../catalog)