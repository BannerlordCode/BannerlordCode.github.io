<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NativeArray`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NativeArray

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public sealed class NativeArray : NativeObject`
**Base:** `NativeObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.DotNet/TaleWorlds.DotNet/NativeArray.cs`

## 概述

`NativeArray` 位于 `TaleWorlds.DotNet`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.DotNet` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Create
`public static NativeArray Create()`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

### AddElement
`public void AddElement(int value)`

**用途 / Purpose:** 向当前集合/状态中添加 `element`。

### AddElement
`public void AddElement(float value)`

**用途 / Purpose:** 向当前集合/状态中添加 `element`。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

## 使用示例

```csharp
NativeArray.Create();
```

## 参见

- [完整类目录](../catalog)