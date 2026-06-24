<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBHaltonColorGenerator`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBHaltonColorGenerator

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBHaltonColorGenerator`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MBHaltonColorGenerator.cs`

## 概述

`MBHaltonColorGenerator` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetBase
`public void SetBase()`

**用途 / Purpose:** 设置 `base` 的值或状态。

### SetBase
`public void SetBase(int baseValue)`

**用途 / Purpose:** 设置 `base` 的值或状态。

### SetOffset
`public void SetOffset(float offset)`

**用途 / Purpose:** 设置 `offset` 的值或状态。

### SetRandomOffset
`public void SetRandomOffset()`

**用途 / Purpose:** 设置 `random offset` 的值或状态。

### GetColor
`public Color GetColor(int index, int maxIndex)`

**用途 / Purpose:** 获取 `color` 的当前值。

## 使用示例

```csharp
var value = new MBHaltonColorGenerator();
value.SetBase();
```

## 参见

- [完整类目录](../catalog)