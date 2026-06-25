---
title: "JPropertyDescriptor"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JPropertyDescriptor`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JPropertyDescriptor

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public class JPropertyDescriptor : PropertyDescriptor`
**Base:** `PropertyDescriptor`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JPropertyDescriptor.cs`

## 概述

`JPropertyDescriptor` 位于 `Newtonsoft.Json.Linq`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Newtonsoft.Json.Linq` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CanResetValue
`public override bool CanResetValue(object component)`

**用途 / Purpose:** 判断当前对象是否可以执行 `reset value`。

### GetValue
`public override object? GetValue(object component)`

**用途 / Purpose:** 获取 `value` 的当前值。

### ResetValue
`public override void ResetValue(object component)`

**用途 / Purpose:** 将 `value` 重置为初始状态。

### SetValue
`public override void SetValue(object component, object value)`

**用途 / Purpose:** 设置 `value` 的值或状态。

### ShouldSerializeValue
`public override bool ShouldSerializeValue(object component)`

**用途 / Purpose:** 处理 `should serialize value` 相关逻辑。

## 使用示例

```csharp
var value = new JPropertyDescriptor();
value.CanResetValue(component);
```

## 参见

- [完整类目录](../catalog)