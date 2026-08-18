---
title: "NarrativeMenuCharacterArgs"
description: "角色创建（叙事）流程里传给每个展示角色槽的轻量参数包：用一组字符串 ID 与开关描述该角色的年龄、装备名册、动作、出生点、左右手道具以及是否人类/女性，由 CharacterCreationManager 在叙事菜单切换时解析并套用到对应 NarrativeMenuCharacter 槽上。"
---
# NarrativeMenuCharacterArgs

**命名空间:** `TaleWorlds.CampaignSystem.CharacterCreationContent`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public readonly struct NarrativeMenuCharacterArgs`（`CharacterCreationContent` 内定义，主构造器参数即全部只读字段）  
**基类:** 无（值类型，不可序列化进战役存档）  
**源文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterCreationContent/NarrativeMenuCharacterArgs.cs`

## 概述

`NarrativeMenuCharacterArgs` 是角色创建「叙事阶段」（`CharacterCreationNarrativeStage`）里，用来描述**一个展示角色该怎么被摆到场景里**的轻量参数包。它不持有 `CharacterObject` 或 `Hero` 引用，而是用 `CharacterId`（对应 `NarrativeMenuCharacter.StringId`）、`EquipmentId`（`MBEquipmentRoster` 的 ID）、`AnimationId`、`SpawnPointEntityId` 等字符串 ID，加上 `Age`、`IsHuman`、`IsFemale`、`LeftHandItemId`、`RightHandItemId`、`MountCreationKey` 等开关与数据，告诉 `CharacterCreationManager.ModifyMenuCharacters` 如何把每个 `NarrativeMenuCharacter` 槽的年龄、装备、道具、动作与出生点改好。原始游戏在 `CharacterCreationCampaignBehavior` 与 `StoryModeCharacterCreationCampaignBehavior` 中大量构造它，分别生成父母、童年/少年/青年/成年各年龄段的玩家角色以及逃脱关的兄弟角色。

## 心智模型

把 `NarrativeMenuCharacterArgs` 想成「叙事菜单里某个人物卡片的**展示说明书**」，而不是数据实体：它处在 **角色创建的 UI/表现层**（`CharacterCreationContent` → `CharacterCreationManager` → `CharacterCreationNarrativeStageView`），不参与战役地图状态，也不进入存档。

- **何时创建**：只有当 `NarrativeMenu` 上挂的 `GetNarrativeMenuCharacterArgsDelegate` 被调用时才产生。该委托由 `CharacterCreationManager.ModifyMenuCharacters` 在每次切换叙事菜单（进入菜单、`TrySwitchToNextMenu`、`TrySwitchToPreviousMenu`）时触发，传入当前的 `SelectedCulture`、`SelectedTitleType` 与本 `CharacterCreationManager`。所以这些 args 是**随菜单切换即时生成、用完即弃**的，绝非战役里长期存活的对象。
- **被谁持有、传给谁**：委托返回 `List<NarrativeMenuCharacterArgs>`，由 `CharacterCreationManager` 临时遍历；manager 按 `CharacterId` 匹配 `CurrentMenu.Characters` 里同 `StringId` 的 `NarrativeMenuCharacter` 槽，再把 args 的字段逐一 `SetEquipment` / `ChangeAge` / `SetLeftHandItem` 套上去，最后交给 `CharacterCreationNarrativeStageView` 渲染到场景里。它**不接触** `CharacterObject`/`Hero`/`Campaign` 的持久状态。
- **与 `CharacterObject`/`Hero` 的关系**：args 本身**只携带字符串 ID**，并不持有角色模板或英雄对象。`PlayerCharacter.IsFemale` 这类信息是在**构造 args 时**由调用方（`CharacterCreationCampaignBehavior`）读取后写入 `IsFemale` 字段的；后续渲染靠 `CharacterObject.PlayerCharacter` 的 `Race`/`IsFemale` 走 facegen 路径，而不是靠 args 持有引用。
- **何时读、何时不要改**：只读它——在自定义 `GetNarrativeMenuCharacterArgsDelegate` 里按需读取 `CharacterCreationManager` 的 `CharacterCreationContent` 来构造它；或在阅读源码时把它当作「manager 如何把展示参数套到槽上」的契约。由于它是 `readonly struct`，**不要试图事后改写字段**；需要不同值就构造一个新的 args。也不要在角色创建流程之外构造它——没有任何系统会消费流程外的 args。

## 何时使用 / 何时不要使用

- **用**：在自定义角色创建内容（`CharacterCreationContent` 子类或 `CharacterCreationCampaignBehavior`）里，实现 `GetNarrativeMenuCharacterArgsDelegate`，为某个 `NarrativeMenu` 的展示角色返回 `List<NarrativeMenuCharacterArgs>`，以控制不同年龄/装备/性别的展示角色。参数里的 ID 与开关要和场景中已存在的实体、动作、装备名册一一对应。
- **用**：阅读 `CharacterCreationManager.ModifyMenuCharacters` 时，把它当作「ID→槽属性」的映射契约，理解 `CharacterId` 如何匹配 `NarrativeMenuCharacter.StringId`、`IsHuman` 如何决定走人类还是坐骑代码分支。
- **不要用**：不要把这个 struct 当成角色数据实体去持久化或挂到 `Hero`/`CharacterObject` 上——它不进入存档，离创角流程即失效。
- **不要用**：不要在 `IsHuman == true` 时把 `LeftHandItemId`/`RightHandItemId` 填成坐骑道具，也不要在 `IsHuman == false` 时把它们当成人类左右手道具；两组的语义不同（见成员说明）。
- **不要用**：不要引用不存在的 ID（`EquipmentId`/`SpawnPointEntityId`/`AnimationId`/`CharacterId` 或坐骑场景里的 `LeftHandItemId`）。它们会被 `Game.Current.ObjectManager`/场景实体在运行时解析，缺失会触发断言或回退到默认装备，详见风险段。

## 依赖图

- 上游 / 生产者：
  - [NarrativeMenu](../NarrativeMenu) 在其 `GetNarrativeMenuCharacterArgs` 委托字段上声明了 `GetNarrativeMenuCharacterArgsDelegate`，这个委托的返回值正是 `List<NarrativeMenuCharacterArgs>`，是 args 唯一的出生口。
  - [CharacterCreationCampaignBehavior](../CharacterCreationCampaignBehavior) 是原始游戏最大的构造方：`GetParentMenuNarrativeMenuCharacterArgs`、`GetChildhoodMenuNarrativeMenuCharacterArgs`、`GetEducationMenuNarrativeMenuCharacterArgs`、`GetYouthMenuNarrativeMenuCharacterArgs`、`GetAdultMenuNarrativeMenuCharacterArgs`、`GetAgeSelectionMenuNarrativeMenuCharacterArgs` 都用 `new NarrativeMenuCharacterArgs(...)` 生成父母与各年龄段玩家角色。
  - [CultureObject](../CultureObject) 经 `CharacterCreationContent.SelectedCulture` 传入委托；构造 `EquipmentId` 时通常要把文化 `StringId` 拼进名册 ID（如 `"mother_char_creation_none_" + culture.StringId`）。
  - [CharacterObject](../CharacterObject) 提供 `CharacterObject.PlayerCharacter.IsFemale` / `Race`，构造方据此填 `IsFemale` 字段、渲染方据此走 facegen 路径。
- 下游 / 消费者：
  - [CharacterCreationManager](../CharacterCreationManager) 的 `ModifyMenuCharacters` 遍历 args，用 `CharacterId` 匹配 [NarrativeMenuCharacter](../NarrativeMenuCharacter) 槽并调用 `SetEquipment` / `ChangeAge` / `SetLeftHandItem` / `SetRightHandItem` / `SetAnimationId` / `SetSpawnPointEntityId` 等，把参数套到展示角色上。
  - [CharacterCreationContent](../CharacterCreationContent)（`ccm.CharacterCreationContent`）是委托里读取 `SelectedCulture` / `SelectedTitleType` / `StartingAge` 的来源。
  - 渲染由 `CharacterCreationNarrativeStageView`（视图层，不在 `api/campaign` 内）消费 `NarrativeMenuCharacter` 完成，间接依赖本 args 写入的中间态。
- 相关类型 / 上下文：
  - [Campaign](../Campaign) 提供角色创建的全局环境（`Game.Current.ObjectManager` 负责把 `EquipmentId` 解析成 `MBEquipmentRoster`，把 `LeftHandItemId` 解析成 `ItemObject`）；创角发生在新战役启动阶段。
  - `MBEquipmentRoster` / `MountCreationKey`：args 经 ID（`EquipmentId` / 坐骑分支的 `LeftHandItemId`）引用它们，但二者在 `api/campaign` 中没有独立页面，仅在此说明其解析依赖。

## 风险

- **ID 解析失败会触发断言并回退默认装备**：`CharacterCreationManager.ModifyMenuCharacters` 用 `Game.Current.ObjectManager.GetObject<MBEquipmentRoster>(item.EquipmentId)` 取装备名册；取不到会 `Debug.FailedAssert("character creation menu character equipment should not be null! ...")` 并回退到 `"player_char_creation_default"`。若 `EquipmentId` 拼错或对应文化名册未注册，展示角色会装备默认套装、与预期不符，且生产版本仍可能留下断言噪声。
- **坐骑分支的空引用**：当 `IsHuman == false` 时，渲染方把 `LeftHandItemId` 当作马匹 `ItemObject` 取 `HorseComponent.Monster`；若该 ID 指向的不是带 `HorseComponent` 的物品，`val5.HorseComponent` 会得到 `null`，随后访问 `.Monster` 抛 `NullReferenceException`。坐骑分支务必保证 `LeftHandItemId` 是合法马匹 ID。
- **`SpawnPointEntityId` 缺失只是退化为原点**：视图用 `_characterScene.FindEntityWithTag(character.SpawnPointEntityId)` 找出生点，找不到就用 `MatrixFrame.Identity`（脚底原点），角色会叠在一起或落在场景原点，但不崩溃。拼写错误很难立刻发现，需肉眼核对场景实体名。
- **`CharacterId` 必须匹配某个槽的 `StringId`**：manager 用 `item2.StringId == item.CharacterId` 做匹配，匹配不上就 `continue`、该角色保持 `NarrativeMenu` 里写死的初始状态。ID 写错不会报错，只是「没生效」。
- **`IsHuman` 二元分流，语义易混**：`IsHuman == true` 时 `LeftHandItemId`/`RightHandItemId` 是人类左右手道具 prefab（经 `AddPrefabToAgentVisualBoneByRealBoneIndex` 挂到骨骼）；`IsHuman == false` 时它们变成马匹 ID（`SetHorseItemId`）与挽具 ID（`SetHarnessItemId`）。同一个字段在两种模式下含义完全不同，填错会让人类角色手持坐骑、或坐骑装备人类道具。
- **非持久 / 必须随流程生成**：args 是 `readonly struct`，**不标注存档**、不被序列化。它只在 `ModifyMenuCharacters` 调用期间存在于 `List<>` 里，菜单切换后即被丢弃。不要把它缓存到 `Hero` / `Campaign` / 自定义 Behavior 的长期状态里，读档或流程结束后引用一定失效。
- **必须在角色创建上下文内构造**：委托被调用时带着 `CharacterCreationContent.SelectedCulture` / `SelectedTitleType`。若在 `Campaign` 已结束或 `CharacterCreationManager` 未就绪时手动 `new`，构造出的 args 无人消费，且 `Game.Current.ObjectManager` 解析所用的对象集依赖当前创角会话，脱离该会话可能解析不到预期名册。

## 成员说明（每个字段的真实用途）

| 字段 | 类型 | 真实用途、携带什么、何时被读 |
| --- | --- | --- |
| `CharacterId` | `string`（只读） | 角色标识，用于匹配 `NarrativeMenuCharacter.StringId`（manager 中 `item2.StringId == item.CharacterId`）。它**不是** `CharacterObject` ID，而是菜单里那个展示槽的名字（如 `"player_childhood_character"`、`"mother_character"`、`"father_character"`、`"brother_character"`）。读于 `ModifyMenuCharacters` 的匹配循环。 |
| `Age` | `int`（只读） | 该展示角色的年龄数值，传给 `NarrativeMenuCharacter.ChangeAge(age)` 决定模型比例/外观年龄。原始游戏分别用 7（童年）、12（少年）、17（青年）、20（成年）、`StartingAge`（起始年龄选择）、33（父母）。读于 manager 套用阶段。 |
| `EquipmentId` | `string`（只读） | `MBEquipmentRoster` 的 ID，由 `Game.Current.ObjectManager.GetObject<MBEquipmentRoster>(...)` 解析成装备名册后 `SetEquipment`。通常形如 `"mother_char_creation_none_" + culture.StringId` 或 `"player_char_creation_default"`。解析失败则断言并回退默认名册。 |
| `AnimationId` | `string`（只读） | 展示角色待机/站位动作的 action ID，如 `"act_childhood_schooled"`、`"act_character_creation_female_default_standing"`、`"act_character_creation_male_default_standing"`。传给 `NarrativeMenuCharacter.SetAnimationId`，最终包装成 `ActionIndexCache` 驱动骨骼动画。 |
| `SpawnPointEntityId` | `string`（只读） | 场景中用于摆放该角色的实体 tag，如 `"spawnpoint_player_1"`、`"spawnpoint_brother_brother_stage"`。视图用 `FindEntityWithTag` 取其全局坐标；找不到退化为 `MatrixFrame.Identity`。 |
| `LeftHandItemId` | `string`（只读） | 人类模式下是左手/副手道具 prefab ID（`SetLeftHandItem`），挂到 `OffHandItemBoneIndex`；坐骑模式（`IsHuman==false`）下则是马匹 `ItemObject` ID（`SetHorseItemId`），渲染时取其 `HorseComponent.Monster`。语义随 `IsHuman` 切换。 |
| `RightHandItemId` | `string`（只读） | 人类模式下是右手/主手道具 prefab ID（`SetRightHandItem`），挂到 `MainHandItemBoneIndex`；坐骑模式下是挽具（harness）道具 ID（`SetHarnessItemId`）。同样随 `IsHuman` 切换语义。 |
| `MountCreationKey` | `MountCreationKey`（只读，可空） | 仅在坐骑分支使用：`SetMountCreationKey` 后由 `MountVisualCreator.AddMountMeshToEntity` 据此生成坐骑外观。人类角色构造时传 `null` 即可（如原始游戏 `GetParentMenuNarrativeMenuCharacterArgs` 传 `null`）。 |
| `IsHuman` | `bool`（只读） | 决定 manager / 视图走哪条套用分支：`true` → 装备、年龄、性别、左右手道具路径；`false` → 坐骑路径（马匹 ID、挽具 ID、`MountCreationKey`）。原始游戏展示角色几乎都传 `true`。 |
| `IsFemale` | `bool`（只读） | 该展示角色的性别，写入 `NarrativeMenuCharacter.IsFemale`，并影响 facegen 的 `ActionSet` 后缀（`_facegen`）与 `SkeletonType`。构造方通常取 `CharacterObject.PlayerCharacter.IsFemale`（父母/兄弟按各自角色写死）。 |

## 示例

### 示例 1：在自定义创角 Behavior 里为「父母」菜单构造展示角色参数

以下写法对照 `CharacterCreationCampaignBehavior.GetParentMenuNarrativeMenuCharacterArgs`（`bin/.../CampaignBehaviors/CharacterCreationCampaignBehavior.cs` 约 286–291 行）。注意 `EquipmentId` 必须拼入当前文化的 `StringId`，`IsFemale` 按角色写死，父母都传人类路径（`isHuman: true`）。

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterCreationContent;
using TaleWorlds.Core;

// 实现 NarrativeMenu.GetNarrativeMenuCharacterArgs 委托时返回的参数列表
List<NarrativeMenuCharacterArgs> GetParentMenuArgs(CultureObject culture, string occupationType, CharacterCreationManager ccm)
{
    List<NarrativeMenuCharacterArgs> list = new List<NarrativeMenuCharacterArgs>();
    string cultureSuffix = ccm.CharacterCreationContent.SelectedCulture.StringId;

    list.Add(new NarrativeMenuCharacterArgs(
        characterId: "mother_character",
        age: 33,
        equipmentId: "mother_char_creation_none_" + cultureSuffix,
        animationId: "act_character_creation_female_default_standing",
        spawnPointEntityId: "spawnpoint_player_1",
        leftHandItemId: "",
        rightHandItemId: "",
        mountCreationKey: null,
        isHuman: true,
        isFemale: true));

    list.Add(new NarrativeMenuCharacterArgs(
        "father_character",
        33,
        "father_char_creation_none_" + cultureSuffix,
        "act_character_creation_male_default_standing",
        "spawnpoint_player_1"));   // 其余参数走默认值：空道具、null 坐骑、isHuman:true、isFemale:false

    return list;
}
```

### 示例 2：引擎内部如何把 args 套到展示槽上（取自 `CharacterCreationManager.ModifyMenuCharacters`）

`CharacterCreationManager` 不会让你直接改 args —— 它只读 args 的字段并调用 `NarrativeMenuCharacter` 的 setter。下面是其核心循环（`bin/.../CharacterCreationContent/CharacterCreationManager.cs` 约 245–281 行）的精简版，展示 `CharacterId` 匹配、`IsHuman` 分流与字段读取时机：

```csharp
// 在 CharacterCreationManager 中，每次切换叙事菜单时调用
List<NarrativeMenuCharacter> slots = CurrentMenu.Characters;
foreach (NarrativeMenuCharacterArgs arg in CurrentMenu.GetNarrativeMenuCharacterArgs(
    ccm.CharacterCreationContent.SelectedCulture,
    ccm.CharacterCreationContent.SelectedTitleType,
    ccm))
{
    foreach (NarrativeMenuCharacter slot in slots)
    {
        if (slot.StringId != arg.CharacterId)
            continue;                       // 用 CharacterId 匹配展示槽

        if (arg.IsHuman)
        {
            MBEquipmentRoster roster = Game.Current.ObjectManager.GetObject<MBEquipmentRoster>(arg.EquipmentId);
            slot.SetEquipment(roster);       // 装备名册缺失会断言并回退默认
            slot.SetLeftHandItem(arg.LeftHandItemId);
            slot.SetRightHandItem(arg.RightHandItemId);
            slot.ChangeAge(arg.Age);
            slot.IsFemale = arg.IsFemale;
        }
        else
        {
            slot.SetMountCreationKey(arg.MountCreationKey);
            slot.SetHorseItemId(arg.LeftHandItemId);     // 坐骑分支：LeftHandItemId=马匹 ID
            slot.SetHarnessItemId(arg.RightHandItemId);  // RightHandItemId=挽具 ID
        }
        slot.SetAnimationId(arg.AnimationId);
        slot.SetSpawnPointEntityId(arg.SpawnPointEntityId);
        break;
    }
}
```

注意 `arg` 是 `readonly struct`，循环内只读不写；任何展示差异都必须通过**构造新的 args**（示例 1）来表达，而不是改现有 args 的字段。

## 版本注记

本页以 v1.4.5 `TaleWorlds.CampaignSystem.CharacterCreationContent/NarrativeMenuCharacterArgs.cs` 的 `readonly struct` 主构造器定义为准，并交叉核对同目录 `NarrativeMenu.cs`（`GetNarrativeMenuCharacterArgsDelegate`）、`CharacterCreationManager.cs`（`ModifyMenuCharacters`）以及 `bin/.../CampaignBehaviors/CharacterCreationCampaignBehavior.cs`、`Modules.StoryMode/.../StoryModeCharacterCreationCampaignBehavior.cs` 中的真实构造点。跨版本使用时重新确认：主构造器参数顺序与默认值、`IsHuman` 两路分支的字段语义、以及 `EquipmentId` 名册命名是否仍随文化 `StringId` 拼接。

## 导航

- ↑ 父级：[Campaign API 索引](../)
- ↔ 同级（同目录 `api/campaign/`）：
  - [NarrativeMenu](../NarrativeMenu)（持有生产 args 的委托）
  - [NarrativeMenuCharacter](../NarrativeMenuCharacter)（args 被套用的目标槽）
  - [CharacterCreationManager](../CharacterCreationManager)（遍历并消费 args）
  - [CharacterCreationCampaignBehavior](../CharacterCreationCampaignBehavior)（最大的 args 构造方）
  - [CharacterCreationContent](../CharacterCreationContent)（委托里读取 `SelectedCulture` / `StartingAge`）
  - [CultureObject](../CultureObject)（构造 `EquipmentId` 时拼接的文化来源）
  - [CharacterObject](../CharacterObject)（提供 `PlayerCharacter.IsFemale` / `Race`）
  - [Campaign](../Campaign)（提供 `Game.Current.ObjectManager` 解析 ID 的会话环境）
