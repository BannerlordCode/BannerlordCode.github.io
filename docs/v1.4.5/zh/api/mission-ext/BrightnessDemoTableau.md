<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BrightnessDemoTableau`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BrightnessDemoTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BrightnessDemoTableau`
**Base:** 无
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/BrightnessDemoTableau.cs`

## 概述

`BrightnessDemoTableau` 位于 `TaleWorlds.MountAndBlade.View.Tableaus`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Tableaus` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |

## 主要方法

### SetDemoType
`public void SetDemoType(int demoType)`

**用途 / Purpose:** 设置 `demo type` 的值或状态。

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**用途 / Purpose:** 设置 `target size` 的值或状态。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetScene
`public void SetScene()`

**用途 / Purpose:** 设置 `scene` 的值或状态。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new BrightnessDemoTableau();
value.SetDemoType(0);
```

## 参见

- [完整类目录](../catalog)