<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterSpawner`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterSpawner

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterSpawner : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Scripts/CharacterSpawner.cs`

## 概述

`CharacterSpawner` 位于 `TaleWorlds.MountAndBlade.View.Scripts`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Scripts` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClothColor1` | `public uint ClothColor1 { get; }` |
| `ClothColor2` | `public uint ClothColor2 { get; }` |

## 主要方法

### SetCreateFaceImmediately
`public void SetCreateFaceImmediately(bool value)`

**用途 / Purpose:** 设置 `create face immediately` 的值或状态。

### SetClothColors
`public void SetClothColors(uint color1, uint color2)`

**用途 / Purpose:** 设置 `cloth colors` 的值或状态。

### SpawnCharacter
`public void SpawnCharacter()`

**用途 / Purpose:** 处理 `spawn character` 相关逻辑。

### InitWithCharacter
`public void InitWithCharacter(CharacterCode characterCode, bool useBodyProperties = false)`

**用途 / Purpose:** 初始化 `with character` 的状态、资源或绑定。

## 使用示例

```csharp
var value = new CharacterSpawner();
value.SetCreateFaceImmediately(false);
```

## 参见

- [完整类目录](../catalog)