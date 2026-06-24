<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NavigationPath`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NavigationPath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class NavigationPath : ISerializable`
**Base:** `ISerializable`
**File:** `TaleWorlds.Library/NavigationPath.cs`

## 概述

`NavigationPath` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PathPoints` | `public Vec2 PathPoints { get; }` |
| `Size` | `public int Size { get; set; }` |
| `this` | `public Vec2 this { get; }` |

## 主要方法

### GetObjectData
`public virtual void GetObjectData(SerializationInfo info, StreamingContext context)`

**用途 / Purpose:** 获取 `object data` 的当前值。

### OverridePathPointAtIndex
`public void OverridePathPointAtIndex(int index, in Vec2 newValue)`

**用途 / Purpose:** 处理 `override path point at index` 相关逻辑。

## 使用示例

```csharp
var value = new NavigationPath();
value.GetObjectData(info, context);
```

## 参见

- [完整类目录](../catalog)