---
title: "AgentVisualsData"
description: "Agent 外观的参数包：约 30 个只读属性加约 25 个链式 setter，描述骨架类型、装备网格、布料颜色、动作集与身体比例，交给 AgentVisuals.Create 变成 native 实体。"
---

# AgentVisualsData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentVisualsData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/AgentVisualsData.cs`

## 概述

`AgentVisualsData` 是「这个 Agent 长什么样」的完整参数包，300 行。它是**类不是结构体**，内部约 30 个属性全是 `private set`（只能读，写只能走同名链式 setter），唯一的公开**字段**是 `public MBAgentVisuals AgentVisuals`——一个指向已存在的 native 视觉对象的引用。

它的消费方只有一处核心：`[AgentVisuals](../AgentVisuals/)` 的私有 `Refresh` 与 `Tick`，以及公开的静态 `AgentVisuals.Create(AgentVisualsData, string, bool, bool, bool)`。View 层把这里每一项翻译成对 `MBAgentVisuals` / `Skeleton` / `GameEntity` 的 native 调用——网格挂载、颜色贴图、骨架重建都在那边。

## 心智模型

把它当成**「建造订单」而不是「渲染对象」**，四个推论：

第一，**它没有任何渲染能力**。里面没有一个方法碰 native。写它只是往 30 个槽位里填值；真正建网格、建骨架、建动画通道的是 [AgentVisuals](../AgentVisuals/)。这是它和 `MBAgentVisuals`（native 封装）的根本区别。

第二，**链式 setter 与同名属性成对，改哪个要分清**。比如 `EquipmentData` 是 `private set` 属性，只能通过 `data.Equipment(equipment)` 写；而 `GetCachedWeaponEntity(EquipmentIndex)` 是读方法、`CachedWeaponEntity(EquipmentIndex, GameEntity)` 才是写。**属性带 `Data` 后缀、setter 不带**——这是全类的统一命名约定。

第三，**默认构造的四个值有实际含义**：`ClothColor1Data = uint.MaxValue`、`ClothColor2Data = uint.MaxValue` 表示「未指定，用默认布料色」；`RightWieldedItemIndexData = -1`、`LeftWieldedItemIndexData = -1` 表示「未指定惯用手」。`ActionCodeData` 的属性初始化器是 `= ActionIndexCache.act_none`。而 `ScaleData = 0f` 不是「无缩放」——`AgentVisuals.Refresh` 里 `ScaleData == 0f` 时会改用 `MBBodyProperties.GetScaleFromKey(RaceData, IsFemale ? 1 : 0, BodyPropertiesData)` 现算一个。

第四，**复制构造器逐字段拷贝但有两个例外要注意**。`AgentVisualsData(AgentVisualsData)` 拷贝了 30 个字段，其中 `ActionCodeData` 与 `EntityData` 是从源对象取的；而**默认构造器不会把 `ActionCodeData` 重置成 `act_none` 之外的值**。也就是说 `new AgentVisualsData()` 与 `new AgentVisualsData(src)` 的初始状态不同。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AgentVisuals` | `public MBAgentVisuals AgentVisuals`（**字段**） | 全类唯一的公开可写成员，指向已有的 native 视觉对象。`AgentVisualsCreator` 与 `AgentVisuals` 的实现会读写它（`_data.AgentVisuals.Reset()` / `.GetSkeleton()` / `.SetFrame(ref frame)`）。**外部赋值等于把别人的 native 句柄塞进参数包**，极易与另一个 Agent 的视觉互相干扰。 |
| `AgentVisualsData(AgentVisualsData)` | 复制构造器 | 逐字段深拷贝 30 个槽位（含 5 个 `CachedWeaponSlotNEntity` 与 `ActionCodeData` / `EntityData`）。**`GameEntity` 本身是引用拷贝**，改副本里的实体引用会影响两者。 |
| `AgentVisualsData()` | 默认构造器 | 初始化：`ClothColor1Data` / `ClothColor2Data = uint.MaxValue`、`RightWieldedItemIndexData` / `LeftWieldedItemIndexData = -1`、`ScaleData = 0f`，其余是类型默认值；`ActionCodeData` 由属性初始化器给 `act_none`。 |
| `Equipment(Equipment)` | `public AgentVisualsData Equipment(Equipment equipment)` | 挂什么网格。`EquipmentData` 为 null 时 `AgentVisuals.Refresh` 走「只加皮肤网格、mask = 481」的分支。 |
| `BodyProperties(BodyProperties)` | 对应 setter | 体型比例。`ScaleData == 0f` 时它直接决定最终缩放（`MBBodyProperties.GetScaleFromKey`）。 |
| `SkeletonType(SkeletonType)` | 对应 setter | 骨架类型。**`SkeletonType` 的枚举值里 1 / 5 / 6 / 7 都是 Female**，`AgentVisuals.IsFemale` 判的是 `!= 1 && != 5 && != 6 && != 7` 才为 false——**填错值会得到「性别错乱的外观」而不是异常**。 |
| `ActionSet(MBActionSet)` | 对应 setter | 动作集。`Refresh` 里 `actionSetData.IsValid` 为真才会 `MBSkeletonExtensions.CreateWithActionSet(...)` 建骨架。 |
| `ActionCode(in ActionIndexCache)` | `public AgentVisualsData ActionCode(in ActionIndexCache actionCode)` | 初始播放的动作。**形参带 `in`，调用时必须写 `in`。** |
| `Scene(Scene)` | 对应 setter | 所属场景。骨骼与实体都在这个场景里创建。 |
| `Monster(Monster)` | 对应 setter | 生物定义。`AgentVisuals.Refresh` 里读 `_data.MonsterData.Flags` 判断 `AgentFlag` 值 2048（决定是否走面动画通道）。 |
| `ClothColor1(uint)` / `ClothColor2(uint)` | 对应 setter | 两套布料队色。传入 `uint.MaxValue` 表示不覆盖。`AgentVisuals.AddTeamColorToMesh(metaMesh, color1, color2)` 是最终落点。 |
| `AddColorRandomness(bool)` | 对应 setter | 是否给颜色加随机扰动。`AgentVisuals.GetRandomClothingColors(seed, in1, in2, out c1, out c2)` 用 `MBFastRandom` 按 22 个具名常量范围（`RandomClothingColor1HueRange` 等）扰动。 |
| `Scale(float)` | 对应 setter | 显式缩放。**`0f` 不是「不缩放」而是「按体型现算」**。 |
| `Race(int)` | 对应 setter | 种族下标，参与 `GetScaleFromKey(RaceData, ...)` 的体型查表。 |
| `CharacterObjectStringId(string)` | 对应 setter | 角色 StringId，用于脸部生成与外观标识。 |
| `GetCachedWeaponEntity(EquipmentIndex)` | `public GameEntity GetCachedWeaponEntity(EquipmentIndex slotIndex)` | 按武器槽位读缓存的武器实体。`switch` 覆盖 `WeaponItemBeginSlot` / `Weapon1..3` / `ExtraWeaponSlot` **五个槽**，其余返回 null。 |
| `CachedWeaponEntity(EquipmentIndex, GameEntity)` | 对应 setter | 按槽位写缓存实体。**switch 同样只覆盖那五个槽，没有 default 分支**——传其它 `EquipmentIndex` 静默无操作。 |
| `RightWieldedItemIndex(int)` / `LeftWieldedItemIndex(int)` | 对应 setter | 主手 / 副手持握的装备槽下标，映射到 `RightWieldedItemIndexData` / `LeftWieldedItemIndexData`，决定动作集里的持握姿态。 |
| `UseScaledWeapons` / `UseTranslucency` / `UseTesselation` / `UseMorphAnims` | 四个对应 setter | 四个渲染开关。`Refresh` 里它们直接转成 `_data.AgentVisuals.SetSetupMorphNode(UseMorphAnimsData)` 与 `UseScaledWeapons(UseScaledWeaponsData)`。 |
| `HasClippingPlane(bool)` / `PrepareImmediately(bool)` / `Banner(Banner)` / `MountCreationKey(string)` / `Frame(MatrixFrame)` / `Entity(GameEntity)` | 对应 setter | 其余槽位：裁剪面、是否立即准备、旗帜、自定义坐骑创建键、根坐标系、承载实体。`Frame` 会在 `Refresh` 里被 `rotation.ApplyScaleLocal(_scale)` 就地改写。 |
| `GetCopyAgentVisualsData` 的对应 | — | 注意**读取**一份副本要走 `IAgentVisual.GetCopyAgentVisualsData()`（在 [AgentVisuals](../AgentVisuals/) 上），本类没有同名的读取方法。 |

## 真实示例

最小可用的参数包——照 `GauntletBannerBuilderScreen.cs:249` 与 `BodyGeneratorView.cs:266` 的官方写法：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

Equipment equipment = character.Equipment;
AgentVisualsData data = new AgentVisualsData()
    .UseMorphAnims(true)
    .Equipment(equipment)
    .BodyProperties(character.GetBodyProperties(equipment, -1))
    .Frame(MatrixFrame.Identity)
    .Scale(1f)
    .Race(character.Race);

Debug.Print("scale=" + data.ScaleData + " race=" + data.RaceData, 0);
Debug.Print("left hand slot=" + data.LeftWieldedItemIndexData, 0);
```

直接从既有视觉对象拿一份副本再改——注意复制构造器是逐字段拷贝，`GameEntity` 仍是共享引用：

```csharp
using TaleWorlds.MountAndBlade;

IAgentVisual visual = existingVisual;
AgentVisualsData copy = visual.GetCopyAgentVisualsData();
copy.ClothColor1(teamColor1);
copy.ClothColor2(teamColor2);
visual.Refresh(needBatchedVersionForWeaponMeshes: true, data: copy, forceUseFaceCache: true);
```

按武器槽位读回缓存实体——注意 switch 只覆盖那五个槽：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

AgentVisualsData data = visual.GetCopyAgentVisualsData();
GameEntity mainHand = data.GetCachedWeaponEntity(EquipmentIndex.Weapon1);
GameEntity offHand = data.GetCachedWeaponEntity(EquipmentIndex.ExtraWeaponSlot);
GameEntity bodySlot = data.GetCachedWeaponEntity(EquipmentIndex.WeaponItemBeginSlot);
Debug.Print("mainHand=" + (mainHand != null) + " offHand=" + (offHand != null) + " bodySlot=" + (bodySlot != null), 0);
```

写缓存实体并确认写入生效（不在五个槽里的 `EquipmentIndex` 会被静默忽略）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

AgentVisualsData data = visual.GetCopyAgentVisualsData();
MetaMesh weaponMesh = MetaMesh.GetCopy("my_weapon_mesh");
GameEntity mesh = scene.AddItemEntity(MatrixFrame.Identity, weaponMesh);
data.CachedWeaponEntity(EquipmentIndex.Weapon1, mesh);
Debug.Print("readback = " + (data.GetCachedWeaponEntity(EquipmentIndex.Weapon1) != null), 0);

// 未覆盖的槽位：静默无操作
data.CachedWeaponEntity(EquipmentIndex.ExtraWeaponSlot, null);
```

对照检查默认构造器给的值——这是「为什么我的颜色没生效」的第一现场：

```csharp
using TaleWorlds.MountAndBlade;

AgentVisualsData fresh = new AgentVisualsData();
Debug.Print("cloth1=" + fresh.ClothColor1Data + " cloth2=" + fresh.ClothColor2Data, 0);
Debug.Print("rightSlot=" + fresh.RightWieldedItemIndexData + " leftSlot=" + fresh.LeftWieldedItemIndexData, 0);
Debug.Print("scale=" + fresh.ScaleData + " actionCode=" + fresh.ActionCodeData, 0);
```

## 风险与边界

- **纯参数包，无渲染能力。** 改它不会有任何即时视觉变化；必须交给 `AgentVisuals.Create` 或 `IAgentVisual.Refresh` 才生效。
- **`AgentVisuals` 是公开字段。** 外部能写。写入别人的 native 句柄会导致两个 Agent 抢同一个视觉对象。
- **`Scale = 0f` 的含义是「按体型现算」不是「不缩放」。** 想要真正的 1.0 倍必须显式传 1f。
- **`SkeletonType` 填错不报错。** 枚举里 1 / 5 / 6 / 7 都映射到 Female，填错得到的是性别错误的外观。
- **`ActionCode` 形参带 `in`。** 调用时也必须写 `in`。
- **两个武器槽位方法的 switch 只有五个分支。** `GetCachedWeaponEntity` 命中未覆盖值返回 null；`CachedWeaponEntity` 命中未覆盖值**静默无操作**，两者行为不对称。
- **复制构造器是浅拷贝实体引用。** 5 个 `CachedWeaponSlotNEntity` 与 `EntityData` 的 `GameEntity` 改一个影响两个对象。
- **`Frame` 会被 `Refresh` 就地改写。** `AgentVisuals.Refresh` 里 `frameData.rotation.ApplyScaleLocal(_scale)` 是在 `FrameData` 的副本上做 `ApplyScaleLocal`，但 `MatrixFrame` 内部是引用/共享结构时仍需留意。
- **`uint.MaxValue` 是「未指定」哨兵。** 把 `0` 当作黑色传进去会真的染黑——「颜色不对」十有八九是没意识到 `uint.MaxValue` 才是默认值。
- **不存档。** 全类无 `[Serializable]`，任务外不存活。

## 依赖关系

- 消费方：[AgentVisuals](../AgentVisuals/)（`Modules.Native` 下的 View 层）的静态 `Create` 与私有 `Refresh` / `Tick` 是全树仅有的两处读取方
- 创建入口：[AgentVisualsCreator](../AgentVisualsCreator/) / `IAgentVisualCreator.Create(AgentVisualsData, ...)` 把本类型转成 `IAgentVisual`
- 数据上游：[Mission](../../mission/Mission/) 的 `SpawnAgent` 经由 [AgentBuildData](../AgentBuildData/) 组装；`MultiplayerMissionAgentVisualSpawnComponent.cs:233` 是一处直接的构造例子
- 载荷类型：[Equipment](../../core-extra/Equipment/)、[Monster](../../core-extra/Monster/)、[Banner](../../core-extra/Banner)、[BodyProperties](../../core-extra/BodyProperties)、[MatrixFrame](../../core-extra/MatrixFrame)、[GameEntity](../../engine/GameEntity)、[Scene](../../engine/Scene)、`MBActionSet`、`ActionIndexCache`、`SkeletonType`、`EquipmentIndex`
- native 边界：[MBAgentVisuals](../MBAgentVisuals/) 是唯一的公开字段类型，其余全是托管数据
- 同族：[AgentVisualHolder](../AgentVisualHolder/) 负责视觉对象在 mission 里的登记与回收，本类只描述参数
- 桶首页：[mission-ext API 分区](../)
