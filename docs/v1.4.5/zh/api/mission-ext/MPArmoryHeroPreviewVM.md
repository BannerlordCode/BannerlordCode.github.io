<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPArmoryHeroPreviewVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPArmoryHeroPreviewVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryHeroPreviewVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory/MPArmoryHeroPreviewVM.cs`

## 概述

`MPArmoryHeroPreviewVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HeroVisual` | `public CharacterViewModel HeroVisual { get; set; }` |
| `ClassName` | `public string ClassName { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### SetCharacter
`public unsafe void SetCharacter(BasicCharacterObject character, DynamicBodyProperties dynamicBodyProperties, int race, bool isFemale)`

**用途 / Purpose:** 设置 `character` 的值或状态。

### SetCharacterClass
`public void SetCharacterClass(BasicCharacterObject classCharacter)`

**用途 / Purpose:** 设置 `character class` 的值或状态。

### SetCharacterPerks
`public void SetCharacterPerks(List<IReadOnlyPerkObject> selectedPerks)`

**用途 / Purpose:** 设置 `character perks` 的值或状态。

## 使用示例

```csharp
var value = new MPArmoryHeroPreviewVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)