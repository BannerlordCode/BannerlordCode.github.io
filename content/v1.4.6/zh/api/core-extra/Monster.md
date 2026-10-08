---
title: "Monster"
description: "怪物/骨架定义：XML 里 Monsters 目录的条目，承载碰撞胶囊、动作集代码、步速与几十个骨骼索引，是 Agent 可视化与命中判定的骨架来源。"
---

# Monster

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class Monster : MBObjectBase`
**Base:** `TaleWorlds.ObjectSystem.MBObjectBase`
**File:** `TaleWorlds.Core/Monster.cs`

## 概述

1008 行、89 个公开成员，是 `FaceGen` 层与渲染 / 物理层的中间表示。它不描述「一个种族」，也不描述「一段动画」，而是描述**一个可实例化的身体模板**：一具骨骼、一套碰撞胶囊、一个动作集代码，外加几十个 `sbyte` 骨骼索引告诉引擎「哪根骨头是主手、哪根是脚、哪根决定趴地上」。

加载路径很短：`Game.RegisterTypes` 里 `objectManager.RegisterType<Monster>("Monster", "Monsters", 2U, true, false);`，紧接着 `Game.LoadBasicFiles()` 调 `this.ObjectManager.LoadXML("Monsters", false);`。**typeId 是 2，全游戏第二个被加载的定义类。**

消费端极广：`Game.DefaultMonster` 用 `ObjectManager.GetFirstObject<Monster>()` 兜底；`TaleWorlds.MountAndBlade.FaceGen` 提供 `GetMonster` / `GetMonsterWithSuffix` / `GetBaseMonsterFromRace`；`AgentData.AgentMonster` / `AgentBuildData.AgentMonster` / `AgentVisualsData.MonsterData` / `Agent.Monster` / `HorseComponent.Monster` / `MonsterMissionData.Monster` 全都是它。

## 心智模型

把它想成**一份「身体装配图」**。角色数据（`CharacterObject`）说「这是谁、什么等级、什么性格」，`Monster` 说「他长什么样、怎么动、碰撞体在哪」。两者在生成 Agent 时汇合：`AgentData.Monster(name)` 选定一个 `Monster`，随后 `FaceGen` 依 `Monster.ActionSetCode` 与种族生成外观。

关键结构分五块：

1. **继承（`base_monster`）** —— `Deserialize` 一上来就读 `base_monster` 属性，然后 `objectManager.GetObject<Monster>(this.BaseMonster)` 把基怪物的**几十个字段整体复制**过来（碰撞胶囊、重量、生命、动作集、所有骨骼索引），再把 `BaseMonster` 字段本身指向基怪物**再上一层的 `BaseMonster`**（继续上溯）。这是「派生怪只写差异」的机制。
2. **碰撞与体型** —— `BodyCapsuleRadius` / `BodyCapsulePoint1` / `BodyCapsulePoint2` 三件套定义站姿胶囊，`CrouchedBodyCapsuleRadius` / `CrouchedBodyCapsulePoint1` / `CrouchedBodyCapsulePoint2` 定义蹲姿胶囊。眼睛高度分 `StandingEyeHeight` / `CrouchEyeHeight` / `MountedEyeHeight`，再加 `EyeOffsetWrtHead` 相对头骨的偏移。
3. **动作与移动** —— `ActionSetCode` 与 `FemaleActionSetCode` 是动画集代码；`NumPaces` / `WalkingSpeedLimit` / `CrouchWalkingSpeedLimit` / `JumpAcceleration` / `JumpSpeedLimit` / `RelativeSpeedLimitForCharge` 是移动参数。
4. **骨骼索引** —— 约五十个 `sbyte` 字段与 `sbyte[]` 数组，`sbyte` 的 `-1` 是「无效骨」。取值靠 `static Func<string, string, sbyte> GetBoneIndexWithId` 与 `static Func<string, sbyte, bool> GetBoneHasParentBone` 两个**可注入的静态委托**——游戏启动早期由引擎侧赋值，`Deserialize` 时才有值。
5. **任务期附加数据** —— `MonsterMissionData` 属性惰性创建，走 `Game.Current.MonsterMissionDataCreator.CreateMonsterMissionData(this)`，结果是实现了空接口 `IMonsterMissionData` 的对象（`TaleWorlds.MountAndBlade.MonsterMissionData` 是游戏侧实现）。

## 关键成员

### 继承与体型

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `BaseMonster` | `public string BaseMonster { get; private set; }` | 基怪物的 id（XML 属性 `base_monster`）。反序列化时会**继续上溯**：若基怪物自己也有基怪物，这里存的是链底那一层。 |
| `BodyCapsuleRadius` / `BodyCapsulePoint1` / `BodyCapsulePoint2` | `public float BodyCapsuleRadius { get; private set; }` / `public Vec3 BodyCapsulePoint1 { get; private set; }` / `public Vec3 BodyCapsulePoint2 { get; private set; }` | 站姿躯干胶囊的半径与两个端点。`base_monster` 存在时**整体从基怪物拷贝**，本条目自己写的会被覆盖。 |
| `CrouchedBodyCapsuleRadius` / `CrouchedBodyCapsulePoint1` / `CrouchedBodyCapsulePoint2` | `public float CrouchedBodyCapsuleRadius { get; private set; }` 等 | 蹲姿对应的三件套。命中判定与寻路用哪一套由姿态决定。 |
| `Weight` | `public int Weight { get; private set; }` | 重量（整数）。参与推开、击退等物理计算。 |
| `HitPoints` | `public int HitPoints { get; private set; }` | 身体结构生命值。与 Agent 的 HP 不是同一个概念。 |
| `Flags` | `public AgentFlag Flags { get; private set; }` | 行为位标志，来自 `TaleWorlds.Library.AgentFlag`。`base_monster` 存在时从基怪物整体拷贝。 |

### 动作与移动

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `ActionSetCode` | `public string ActionSetCode { get; private set; }` | 动画集代码。**骨骼索引查询的第一个 key**——`GetBoneIndexWithId(this.ActionSetCode, 属性值)`。 |
| `FemaleActionSetCode` | `public string FemaleActionSetCode { get; private set; }` | 女性变体的动画集代码。为空时回落主代码。 |
| `MonsterUsage` | `public string MonsterUsage { get; private set; }` | 用途分类标记，游戏逻辑靠它区分「马匹」「攻城器械」这类特殊骨架。 |
| `FamilyType` | `public int FamilyType { get; private set; }` | 家族编号（XML 属性 `family_type`，读成 `int`）。**没有配套的枚举类型**，是裸整数。 |
| `NumPaces` | `public int NumPaces { get; private set; }` | 步频。 |
| `WalkingSpeedLimit` / `CrouchWalkingSpeedLimit` | `public float WalkingSpeedLimit { get; private set; }` / `public float CrouchWalkingSpeedLimit { get; private set; }` | 站姿 / 蹲姿行走速度上限。 |
| `JumpAcceleration` / `JumpSpeedLimit` | `public float JumpAcceleration { get; private set; }` / `public float JumpSpeedLimit { get; private set; }` | 起跳加速度与起跳速度上限。 |
| `RelativeSpeedLimitForCharge` | `public float RelativeSpeedLimitForCharge { get; private set; }` | 允许发起冲锋的相对速度上限。**XML 缺失时是 `float.MaxValue`**，即不限制。 |
| `AbsorbedDamageRatio` | `public float AbsorbedDamageRatio { get; private set; }` | 伤害吸收比例。 |

### 视线与摄像机

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `StandingEyeHeight` / `CrouchEyeHeight` / `MountedEyeHeight` | `public float StandingEyeHeight { get; private set; }` 等 | 三种姿态的眼睛高度。`MountedEyeHeight` 是骑乘时。 |
| `StandingChestHeight` / `StandingPelvisHeight` | `public float StandingChestHeight { get; private set; }` / `public float StandingPelvisHeight { get; private set; }` | 站姿胸腔与骨盆高度。命中定位与 UI 挂点用。 |
| `EyeOffsetWrtHead` | `public Vec3 EyeOffsetWrtHead { get; private set; }` | 眼睛相对头骨的偏移（用于非标准头型）。 |
| `FirstPersonCameraOffsetWrtHead` | `public Vec3 FirstPersonCameraOffsetWrtHead { get; private set; }` | 第一人称摄像机相对头骨的偏移。 |
| `RiderCameraHeightAdder` | `public float RiderCameraHeightAdder { get; private set; }` | 骑乘者视角额外抬高。另有 `RiderEyeHeightAdder`。 |
| `RiderBodyCapsuleHeightAdder` / `RiderBodyCapsuleForwardAdder` | `public float RiderBodyCapsuleHeightAdder { get; private set; }` / `public float RiderBodyCapsuleForwardAdder { get; private set; }` | 骑乘者胶囊的高度与前向偏移。 |

### 骨骼索引（sbyte，-1 表示无效）

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `MainHandBoneIndex` / `OffHandBoneIndex` | `public sbyte MainHandBoneIndex { get; private set; }` / `public sbyte OffHandBoneIndex { get; private set; }` | 主手 / 副手骨骼。`GetBoneToAttachForItemFlags` 的默认返回值就是 `MainHandItemBoneIndex` 那一组。 |
| `MainHandItemBoneIndex` / `OffHandItemBoneIndex` / `MainHandItemSecondaryBoneIndex` / `OffHandItemSecondaryBoneIndex` | `public sbyte ...BoneIndex { get; private set; }` | 主/副手的「持物挂点」与「次级挂点」。`GetBoneToAttachForItemFlags` 按物品位标志在这四个之间选。 |
| `OffHandShoulderBoneIndex` | `public sbyte OffHandShoulderBoneIndex { get; private set; }` | 副手挂肩时的肩部骨骼。 |
| `PrimaryFootBoneIndex` / `SecondaryFootBoneIndex` | `public sbyte PrimaryFootBoneIndex { get; private set; }` / `public sbyte SecondaryFootBoneIndex { get; private set; }` | 主 / 次脚骨骼，地形贴合与足迹贴花用。 |
| `RightFootIkEndEffectorBoneIndex` / `LeftFootIkEndEffectorBoneIndex` / `RightFootIkTipBoneIndex` / `LeftFootIkTipBoneIndex` | `public sbyte ... { get; private set; }` | 双足 IK 的末端执行器与尖端。另有 `HandNumBonesForIk` / `FootNumBonesForIk` 两个链长。 |
| `PelvisBoneIndex` / `NeckRootBoneIndex` / `SpineLowerBoneIndex` / `SpineUpperBoneIndex` / `ThoraxLookDirectionBoneIndex` / `HeadLookDirectionBoneIndex` | `public sbyte ... { get; private set; }` | 骨盆、颈根、下段脊柱、上段脊柱、胸腔朝向、头部朝向。**躯干朝向与头部朝向是两回事**，做「看向目标」时别混。 |
| `FallBlowDamageBoneIndex` | `public sbyte FallBlowDamageBoneIndex { get; private set; }` | 落地造成伤害时判定撞击点的骨骼。 |
| `TerrainDecalBone0Index` / `TerrainDecalBone1Index` | `public sbyte ... { get; private set; }` | 两处地形贴花挂点。 |
| `BodyRotationReferenceBoneIndex` | `public sbyte BodyRotationReferenceBoneIndex { get; private set; }` | 身体朝向的参考骨骼。 |
| `RiderSitBoneIndex` | `public sbyte RiderSitBoneIndex { get; private set; }` | 骑乘者坐下的骨骼。 |
| `IndicesOfRagdollBonesToCheckForCorpses` / `RagdollFallSoundBoneIndices` / `RagdollStationaryCheckBoneIndices` / `MoveAdderBoneIndices` / `SplashDecalBoneIndices` / `BloodBurstBoneIndices` / `BoneIndicesToModifyOnSlopingGround` | `public sbyte[] ... { get; private set; }` | 七个骨骼索引**数组**，按序号拼接解析（XML 属性名形如 `ragdoll_bone_to_check_for_corpses_0`、`ragdoll_bone_to_check_for_corpses_1`）。 |
| `FrontBoneToDetectGroundSlopeIndex` / `BackBoneToDetectGroundSlopeIndex` | `public sbyte ... { get; private set; }` | 检测地面坡度用的前 / 后骨骼。 |
| `ReinHandleBoneIndex` / `ReinCollision1BoneIndex` / `ReinCollision2BoneIndex` / `ReinHeadBoneIndex` / `ReinHeadRightAttachmentBoneIndex` / `ReinHeadLeftAttachmentBoneIndex` / `ReinRightHandBoneIndex` / `ReinLeftHandBoneIndex` | `public sbyte ... { get; private set; }` | 缰绳相关的一整套骨骼（马匹专属）。另有 `ReinSkeleton` / `ReinCollisionBody` 两个字符串与 `ReinHandleLeftLocalPosition` / `ReinHandleRightLocalPosition` 两个局部坐标。 |
| `ArmLength` / `ArmWeight` | `public float ArmLength { get; private set; }` / `public float ArmWeight { get; private set; }` | 手臂长度与重量，近战距离与击退计算用。 |

### 派生与扩展点

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 先 `base.Deserialize`，再处理 `base_monster` 继承拷贝，最后逐个属性解析。**`base_monster` 指向不存在的 id 时 `GetObject` 返回 null，紧接着解引用就炸。** |
| `GetBoneToAttachForItemFlags` | `public sbyte GetBoneToAttachForItemFlags(ItemFlags itemFlags)` | 决定物品挂在哪根骨骼：先取 `itemFlags & ItemFlags.AttachmentMask`，为 0 返 `MainHandItemBoneIndex`，是 `ForceAttachOffHandPrimaryItemBone` 返 `OffHandItemBoneIndex`，是 `ForceAttachOffHandSecondaryItemBone` 返 `OffHandItemSecondaryBoneIndex`，**其余一律返 `MainHandItemBoneIndex`**。 |
| `MonsterMissionData` | `public IMonsterMissionData MonsterMissionData { get; }` | 惰性创建的任务期数据。首次访问调 `Game.Current.MonsterMissionDataCreator.CreateMonsterMissionData(this)` 并缓存到 `[CachedData]` 私有字段。**`Game.Current` 为 null 时抛空引用。** |
| `GetBoneIndexWithId` | `public static Func<string, string, sbyte> GetBoneIndexWithId;` | **可注入的静态委托**（不是方法），按「动作集代码 + 骨骼名」返回索引。由引擎侧在加载前赋值；**为 null 时 `DeserializeBoneIndex` 直接返回传入的默认值**。 |
| `GetBoneHasParentBone` | `public static Func<string, sbyte, bool> GetBoneHasParentBone;` | 同上的第二个注入点，用于校验骨骼是否有父骨。为 null 时校验被跳过。 |
| `.ctor` | `public Monster()` | 无参构造。**正式实例由 `LoadXML("Monsters", false)` 产出**，`sealed` 且不可继承。 |

## 怎么用

### 怎么拿到它

`Monster` 是 `public sealed class Monster : MBObjectBase`（`TaleWorlds.Core/Monster.cs:11`），1009 行、90 个公开成员。**sealed**。XML 对象，由 `Game.LoadBasicFiles()` 的 `this.ObjectManager.LoadXML("Monsters", false);`（`Game.cs:597`）加载。

入口有三个：

- 按 id：`MBObjectManager.Instance.GetObject<Monster>("monster id")`
- 取默认：`Game.Current.DefaultMonster`（`Game.cs:39`）——懒加载第一个 `Monster` 并缓存
- 按人种 / 后缀：`FaceGen.GetMonster(string monsterID)`（`FaceGen.cs:61`）、`FaceGen.GetBaseMonsterFromRace(int race)`（`FaceGen.cs:83`）、`FaceGen.GetMonsterWithSuffix(int race, string suffix)`（`FaceGen.cs:72`）——这三个在 `FaceGen._instance` 为 null 时返回 null。

**它没有任何公开构造器**，只有 `public override void Deserialize(MBObjectManager objectManager, XmlNode node)`（`:450`）。所以自定义怪物**只能靠加 XML 行**，不能代码 new。

成员几乎全是 `{ get; private set; }`，分三类：胶囊体（`BodyCapsuleRadius` `:21`、`BodyCapsulePoint1` `:26`、`BodyCapsulePoint2` `:31`，蹲下版 `:36`-`:46`）、运动参数（`NumPaces` `:76`、`WalkingSpeedLimit` `:86`、`CrouchWalkingSpeedLimit` `:91`、`JumpAcceleration` `:96`、`AbsorbedDamageRatio` `:101`）、以及**大量 `sbyte` 骨骼下标**（`RiderSitBoneIndex` `:391`、`PrimaryFootBoneIndex` `:316`、`ReinHeadBoneIndex` `:411` 等，密集分布在 `:280`-`:431`）。

两个静态委托是给 native 侧回填用的钩子：`public static Func<string, string, sbyte> GetBoneIndexWithId;`（`:999`）、`public static Func<string, sbyte, bool> GetBoneHasParentBone;`（`:1002`）。

### 典型用法

```csharp
using TaleWorlds.Core;

// 取一个怪物定义
Monster m = MBObjectManager.Instance.GetObject<Monster>("monster_human");   // MBObjectManager.cs:288
if (m == null) { m = Game.Current.DefaultMonster; }   // Game.cs:39

int hp = m.HitPoints;                     // Monster.cs:61
int weight = m.Weight;                    // :56
string actions = m.ActionSetCode;         // :66
AgentFlag flags = m.Flags;                // :51
float radius = m.BodyCapsuleRadius;       // :21
Vec3 p1 = m.BodyCapsulePoint1;            // :26

// 骨骼下标全是 sbyte，负值就是「没有」
sbyte sitBone = m.RiderSitBoneIndex;      // :391
if (sitBone >= 0) { /* 这只怪物支持骑乘 */ }

// 静态委托是 native 回填的钩子，通常由引擎自己设
Monster.GetBoneIndexWithId = (skeleton, boneId) => 3;
```

### 最容易踩的坑

**把 `sbyte` 骨骼下标当成「不存在就是 0」。** 90 个成员里有几十个是 `sbyte`（`:296` 到 `:431`），默认值 0 是一个**合法且常见**的骨骼下标，所以「读到 0」和「这一项没配置」在数值上分不开。真正可靠的判据是读 `IsRideable` 这类已经算好的布尔属性，或者在 XML 里确认——`rider_sit_bone_index` 缺失时会得到 0，于是你以为骑乘绑定到根骨而不是「不可骑乘」。表现是骑手模型穿过马背、马匹姿态完全错乱，而不是任何报错。

第二个坑是这个类型**只能来自 XML**。没有公开构造器、`sealed`、`Deserialize`（`:450`）是唯一的填充入口——所以「在代码里造一个新怪物类型」根本做不到，只能在 `monsters` 表里加一行再让引擎加载。模组里想在运行期改某个怪物的数值也做不到，因为所有成员都是 `{ get; private set; }`。

按 id 取怪物并读碰撞胶囊与体型（三组尺寸都要按姿态选）：

## 真实示例

<!-- xml-id-unverifiable: v1.4.6 -->
> ⚠️ 不可验证：本页全部字符串 id（下方代码示例中的）在 v1.4.6 源码树均无法核对——该版本未随附 XML 语料。
```csharp
Monster orc = MBObjectManager.Instance.GetObject<Monster>("orc");

if (orc == null)
{
    Debug.Print("monster not loaded", 0);
    return;
}

Debug.Print("actionSet=" + orc.ActionSetCode + " weight=" + orc.Weight + " hp=" + orc.HitPoints, 0);
Debug.Print("standing capsule r=" + orc.BodyCapsuleRadius
    + " p1=" + orc.BodyCapsulePoint1 + " p2=" + orc.BodyCapsulePoint2, 0);
Debug.Print("crouched capsule r=" + orc.CrouchedBodyCapsuleRadius, 0);
Debug.Print("eyes standing=" + orc.StandingEyeHeight + " crouched=" + orc.CrouchEyeHeight + " mounted=" + orc.MountedEyeHeight, 0);
Debug.Print("charge speed limit=" + orc.RelativeSpeedLimitForCharge, 0);
```

按种族拿怪物——走 `FaceGen` 的静态入口，注意实例未就绪时返回 null：

```csharp
Monster baseOne = FaceGen.GetBaseMonsterFromRace(0);
if (baseOne == null)
{
    Debug.Print("facegen not initialized", 0);
    return;
}

Monster settlement = FaceGen.GetMonsterWithSuffix(0, "_settlement_slow");
Monster direct = FaceGen.GetMonster("empire_human");

Debug.Print("base=" + baseOne.StringId + " family=" + baseOne.FamilyType, 0);
Debug.Print("settlement=" + settlement.StringId + " usage=" + settlement.MonsterUsage, 0);
Debug.Print("direct=" + direct.ActionSetCode + " femaleSet=" + direct.FemaleActionSetCode, 0);
```

按物品位标志决定挂点骨骼，并取任务期数据：

```csharp
Monster orc = MBObjectManager.Instance.GetObject<Monster>("orc");

sbyte mainHand = orc.GetBoneToAttachForItemFlags(ItemFlags.None);
sbyte offHand = orc.GetBoneToAttachForItemFlags(ItemFlags.ForceAttachOffHandPrimaryItemBone);
sbyte offSecondary = orc.GetBoneToAttachForItemFlags(ItemFlags.ForceAttachOffHandSecondaryItemBone);

Debug.Print("mainHandBone=" + mainHand + " offHandBone=" + offHand + " offSecondary=" + offSecondary, 0);

IMonsterMissionData missionData = orc.MonsterMissionData;
if (missionData == null)
{
    Debug.Print("mission data creator unavailable", 0);
    return;
}

Debug.Print("mission data type = " + missionData.GetType().Name, 0);
```

遍历全部怪物，检查派生继承链与骨骼索引的有效性（`-1` 就是没配）：

```csharp
List<Monster> all = MBObjectManager.Instance.GetObjectTypeList<Monster>();

int derived = 0;
int missingMainHand = 0;
for (int i = 0; i < all.Count; i++)
{
    Monster monster = all[i];
    if (!string.IsNullOrEmpty(monster.BaseMonster))
    {
        derived++;
    }

    if (monster.MainHandItemBoneIndex < 0)
    {
        missingMainHand++;
    }
}

Debug.Print("total=" + all.Count + " derived=" + derived + " missingMainHandBone=" + missingMainHand, 0);

Monster fallback = Game.Current.DefaultMonster;
Debug.Print("fallback=" + fallback.StringId, 0);
```

## 风险与边界

- **`sealed`，不能继承。** 差异只能靠 `base_monster` 的 XML 继承表达。
- **`base_monster` 拷贝会覆盖本条目的同名字段。** 碰撞胶囊、重量、生命、动作集、全部骨骼索引都是从基怪物整份复制的，然后才解析自己的 XML。**把值写在派生条目里可能根本没生效**——顺序是「先拷贝、再解析自己的」，但数组类字段（`IndicesOfRagdollBonesToCheckForCorpses` 等）在拷贝分支里是把基怪物的数组灌进一个临时 `List<sbyte>` 再写回的，后续按序号逐个覆盖。
- **`base_monster` 指向不存在的 id 直接空引用。** `GetObject<Monster>` 找不到返回 null，紧接着 `@object.BaseMonster` 就炸。**加载期没有降级路径。**
- **两个静态委托不是方法而是字段。** `GetBoneIndexWithId` / `GetBoneHasParentBone` 为 null 时，`DeserializeBoneIndex` 静默返回传入的默认值（通常是 `-1`），**所有骨骼索引会全是 -1 而不报任何错**。
- **骨骼索引是 `sbyte`，`-1` 表示无效。** 骨架超过 127 根骨骼时会溢出。而且索引只在同一个 `ActionSetCode` 范围内有意义。
- **数组类字段按序号拼接。** XML 属性名是前缀加序号（`ragdoll_bone_to_check_for_corpses_0`、`..._1`），解析时**遇到第一个空缺就 `break`**——中间断号会导致后面的索引全丢。
- **`MonsterMissionData` 依赖 `Game.Current`。** 首次访问惰性创建，`Game.Current` 或 `MonsterMissionDataCreator` 为 null 就炸。接口 `IMonsterMissionData` 是**空标记接口**，拿到的具体类型要 `as` 转。
- **`FamilyType` 是裸 `int`。** XML 属性 `family_type`，源码里没有配套枚举，含义只能从游戏数据反推。
- **`RelativeSpeedLimitForCharge` 缺省 `float.MaxValue`。** 唯一缺省不是 0 的浮点字段，其余浮点字段缺省 0f。
- **姿态尺寸必须成组读。** 站姿与蹲姿的胶囊三件套、眼睛高度是分开的字段，读错姿态组会让命中判定与摄像机位置整体偏移。
- **缰绳字段只对马匹有意义。** 普通 humanoid 怪物这些字段全是默认值，别拿来算缰绳。
- **没有公开的枚举成员。** 和 `ItemObject` / `WeaponComponentData` 不同，这个类一个嵌套枚举都没有，所有分组都靠字段名前缀。
- **加载极早。** typeId 2、`LoadBasicFiles()` 的第一个 `LoadXML`。**依赖它的代码不能排在后面。**

## 依赖关系

- 基类：[MBObjectBase](../../campaign-ext/MBObjectBase) 提供 `StringId` 与 `MBObjectManager` 寻址
- 加载顺序：[Game](../Game) 的 `RegisterTypes` 用 typeId 2 注册、`LoadBasicFiles()` 调 `LoadXML("Monsters", false)`——**全树第一份加载的 XML**
- 查找入口：[MBObjectManager](../../campaign-ext/MBObjectManager) 的 `GetObject<Monster>(stringId)` 与 `GetObjectTypeList<Monster>()`；[Game](../Game) 的 `DefaultMonster` 用 `GetFirstObject<Monster>()`
- 外观生成：[FaceGen](../FaceGen) 的 `GetMonster` / `GetMonsterWithSuffix` / `GetBaseMonsterFromRace` / `GetBaseMonsterNameFromRace` 是静态门面
- Agent 装配：`TaleWorlds.MountAndBlade.AgentData.AgentMonster`、`AgentBuildData.AgentMonster`、`AgentVisualsData.MonsterData`、`Agent.Monster`
- 马匹：[HorseComponent](../HorseComponent) 的 `Monster` 属性与整组缰绳骨骼字段配套
- 任务数据：`TaleWorlds.Core.IMonsterMissionData`（空标记接口），由 [Game](../Game) 的 `MonsterMissionDataCreator` 产出
- 骨骼查询注入：`GetBoneIndexWithId` / `GetBoneHasParentBone` 两个静态 `Func`，实现在 `TaleWorlds.Engine.ISkeleton` 一侧
- 物品挂点：`ItemFlags.AttachmentMask` / `ForceAttachOffHandPrimaryItemBone` / `ForceAttachOffHandSecondaryItemBone`（`TaleWorlds.Core`）
- 模块地图：[module-map](../../../architecture/module-map)
- 桶首页：[core-extra API 分区](../)

## 导航

- 同桶：[`../FaceGen`](../FaceGen) · [`../HorseComponent`](../HorseComponent) · [`../WeaponComponentData`](../WeaponComponentData)
- 父索引：[`../_index`](../_index)
