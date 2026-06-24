<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MaterialTuple`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MaterialTuple

**命名空间:** TaleWorlds.Engine.GauntletUI
**模块:** TaleWorlds.Engine
**类型:** `public struct MaterialTuple : IEquatable<TwoDimensionEnginePlatform.MaterialTuple>`
**Base:** `IEquatable<TwoDimensionEnginePlatform.MaterialTuple>`
**领域:** engine

## 概述

`MaterialTuple` 位于 `TaleWorlds.Engine.GauntletUI`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Engine.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### Equals
`public bool Equals(TwoDimensionEnginePlatform.MaterialTuple other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 MaterialTuple 实例，再调用它的公开方法
var value = new MaterialTuple();
value.Reset();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
