<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NativeString`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeString

**命名空间:** TaleWorlds.DotNet
**模块:** TaleWorlds.DotNet
**类型:** `public sealed class NativeString : NativeObject`
**Base:** `NativeObject`
**领域:** campaign-ext

## 概述

`NativeString` 位于 `TaleWorlds.DotNet`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.DotNet` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Create
`public static NativeString Create()`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

### GetString
`public string GetString()`

**用途 / Purpose:** 获取 `string` 的当前值。

### SetString
`public void SetString(string newString)`

**用途 / Purpose:** 设置 `string` 的值或状态。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
NativeString.Create();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
