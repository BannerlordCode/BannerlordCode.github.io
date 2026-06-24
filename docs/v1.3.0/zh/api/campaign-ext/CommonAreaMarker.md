<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CommonAreaMarker`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CommonAreaMarker

**Namespace:** SandBox.Objects.AreaMarkers
**Module:** SandBox.Objects
**Type:** `public class CommonAreaMarker : AreaMarker`
**Base:** `AreaMarker`
**File:** `SandBox/Objects/AreaMarkers/CommonAreaMarker.cs`

## 概述

`CommonAreaMarker` 位于 `SandBox.Objects.AreaMarkers`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects.AreaMarkers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HiddenSpawnFrames` | `public List<MatrixFrame> HiddenSpawnFrames { get; }` |
| `Tag` | `public override string Tag { get; }` |

## 主要方法

### GetUsableMachinesInRange
`public override List<UsableMachine> GetUsableMachinesInRange(string excludeTag = null)`

**用途 / Purpose:** 获取 `usable machines in range` 的当前值。

### GetAlley
`public Alley GetAlley()`

**用途 / Purpose:** 获取 `alley` 的当前值。

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

## 使用示例

```csharp
var value = new CommonAreaMarker();
value.GetUsableMachinesInRange("example");
```

## 参见

- [完整类目录](../catalog)