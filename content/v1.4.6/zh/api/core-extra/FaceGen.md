---
title: "FaceGen"
description: "脸型与体型的静态外观门面：把种族、发色、纹身、年龄等外观操作转发给 IFaceGen 实例，实例未装时全部静默回退。"
---
# FaceGen

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class FaceGen`
**Base:** `System.Object`（全静态，无实例）
**File:** `TaleWorlds.Core/FaceGen.cs`

## 概述

它是外观系统唯一的 C# 入口，**自身不含任何逻辑**——每个公开方法都是「取静态字段 `_instance`（类型 `IFaceGen`），非 null 就转发，为 null 就返回一个兜底值」。真正的实现在 `TaleWorlds.MountAndBlade` 命名空间下的另一个 `FaceGen` 类里（它实现 `IFaceGen`），通过静态方法 `CreateInstance()` 调 `FaceGen.SetInstance(new FaceGen())` 装进来。**本类这一侧的实现是「无实例就退化」，不是「无实现」。**

门面覆盖四组能力：种族与怪物查询（`GetRaceCount` / `GetRaceNames` / `GetRaceOrDefault` / `GetMonster` / `GetBaseMonsterFromRace` / `GetMonsterWithSuffix` / `GetBaseMonsterNameFromRace`）、随机外观（`GetRandomBodyProperties`）、按部件改外观（`SetHair` / `SetBody` / `SetPigmentation`）、年龄推演（`GetBodyPropertiesWithAge` / `GetMaturityTypeWithAge`）与亲缘推演（`GenerateParentKey`）。

`_instance` 由 `TaleWorlds.MountAndBlade.FaceGen.CreateInstance()` 安装——**那是个 `public static` 方法，源码里能看到它调 `SetInstance(new FaceGen())`，但本仓未核实它被引擎在哪个启动阶段调用**。

## 心智模型

当静态工具类用，顺序永远是「引擎先 `CreateInstance()` 装好实现 → 之后随便调」。**在装实例之前调任何方法都不会抛异常，只会拿到退化值**：

| 方法 | 未装实例时返回 |
| --- | --- |
| `GetRandomBodyProperties(...)` | **原样返回 `bodyPropertiesMin`**（下限值，不是随机值） |
| `GetRaceCount()` / `GetRaceOrDefault(...)` | `0` |
| `GetMonster(...)` / `GetMonsterWithSuffix(...)` / `GetBaseMonsterFromRace(...)` | `null` |
| `GetRaceNames()` / `GetBaseMonsterNameFromRace(...)` | `null` |
| `GenerateParentKey(...)` / `SetHair(...)` / `SetBody(...)` / `SetPigmentation(...)` | **直接 `return`，`ref` 出参原封不动** |
| `GetBodyPropertiesWithAge(...)` | **原样返回传入的 `originalBodyProperties`** |
| `GetMaturityTypeWithAge(float)` | `BodyMeshMaturityType.Child` |
| `GetHairIndicesByTag(...)` / `GetFacialIndicesByTag(...)` / `GetTattooIndicesByTag(...)` | `Array.Empty<int>()` |
| `GetTattooZeroProbability(...)` | `0f` |

**最坑的一条就是这种静默退化。** 最典型的事故链：`BasicCharacterObject.MaxHitPoints()` 内部是 `FaceGen.GetBaseMonsterFromRace(this.Race).HitPoints`——未装实例时 `GetBaseMonsterFromRace` 返回 null，**紧接着解引用就是 `NullReferenceException`**，而栈顶只有一行 `BasicCharacterObject.cs`。排查时容易以为是角色数据坏了，实际是外观系统没初始化。同理 `Equipment` 之类地方拿 `GetRandomBodyProperties` 的结果当随机值用，得到的是所有角色长得一模一样的下限值。

第二条：`GetRandomBodyProperties` 的退化行为返回的是 **`bodyPropertiesMin` 而不是 `bodyPropertiesMax`，也不是 default**。这个不对称是有意的（宁可给保守下限），但你不会从签名上看出来。

第三条：`SetHair` / `SetBody` / `SetPigmentation` / `GenerateParentKey` 全是 **`ref` 参数 + void 返回**。**没有任何返回值能告诉你它到底生效没有**——没装实例时静默 no-op，装了实例时是否成功完全在 native 侧。

第四条：**别把 `FaceGen` 和 `TaleWorlds.MountAndBlade.FaceGen` 搞混。** 后者是 `IFaceGen` 的实现类，命名空间不同、所在程序集不同，`CreateInstance()` 用的正是后者。文档树里 `core-extra/FaceGen` 指的是**本页这个静态门面**；`IFaceGen` 接口本身没有单独页面。

常见误用：在模块加载早期 `GetRaceCount()` 探活（返回 0，看起来像「不支持任何种族」）；把 `GetRandomBodyProperties` 的返回值当「随机过的」；对没装实例的环境调 `SetHair` 之后以为改成功了。

## 关键成员

### 安装与调试开关

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `SetInstance` | `public static void SetInstance(IFaceGen faceGen)` | **唯一能装实现的入口**，写静态字段 `_instance`。`TaleWorlds.MountAndBlade.FaceGen.CreateInstance()` 内部就是 `FaceGen.SetInstance(new FaceGen())`。传 null 即等于卸载，之后所有调用退回退化行为。 |
| `ShowDebugValues` | `public static bool ShowDebugValues` | 公开可写静态开关，由 native 侧读取以显示调试图。**改它只对之后生效的渲染帧有意义。** |
| `UpdateDeformKeys` | `public static bool UpdateDeformKeys` | 公开可写静态开关，控制是否重算形变 key。同样由 native 侧消费。 |

### 种族与怪物

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GetRaceCount` | `public static int GetRaceCount()` | 可用种族总数。未装实例返回 `0`。 |
| `GetRaceNames` | `public static string[] GetRaceNames()` | 全部种族 id。未装实例返回 `null`。 |
| `GetRaceOrDefault` | `public static int GetRaceOrDefault(string raceId)` | 按 id 取种族索引，**找不到回落到 0**（这个 `0` 是「默认种族」的约定值，不是错误码）。未装实例也返回 0。 |
| `GetMonster` | `public static Monster GetMonster(string monsterID)` | 按怪物 id 取 `Monster`。未装实例返回 `null`。 |
| `GetBaseMonsterFromRace` | `public static Monster GetBaseMonsterFromRace(int race)` | 该种族的基础怪物。**未装实例返回 null，而 `BasicCharacterObject.MaxHitPoints()` 会直接解引用它。** |
| `GetMonsterWithSuffix` | `public static Monster GetMonsterWithSuffix(int race, string suffix)` | 「种族 + 后缀」取怪物，配合 `MonsterSuffixSettlement` 等常量用。 |
| `GetBaseMonsterNameFromRace` | `public static string GetBaseMonsterNameFromRace(int race)` | 基础怪物名，源码写的是 `((...) ?? null)`，即 null-safe 后再赋 null。 |

### 随机与改写

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GetRandomBodyProperties` | `public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount)` | 在 min/max 之间随机出一份完整体型。**未装实例时返回 `bodyPropertiesMin` 原值**——这是本类最容易被误用的返回值。注意参数名源码里是 `tatooTags`（拼写少一个 o），C# 具名参数调用要照抄这个拼写。 |
| `SetHair` | `public static void SetHair(ref BodyProperties bodyProperties, int hair, int beard, int tattoo)` | 就地改写发型/胡须/纹身的索引。**`ref` 参数 + void：未装实例时静默 no-op。** |
| `SetBody` | `public static void SetBody(ref BodyProperties bodyProperties, int build, int weight)` | 就地改体型与体重。`ref` + void，同样的静默 no-op 风险。 |
| `SetPigmentation` | `public static void SetPigmentation(ref BodyProperties bodyProperties, int skinColor, int hairColor, int eyeColor)` | 就地改肤色/发色/瞳色。`ref` + void。 |
| `GenerateParentKey` | `public static void GenerateParentKey(BodyProperties childBodyProperties, int race, ref BodyProperties motherBodyProperties, ref BodyProperties fatherBodyProperties)` | 由子女体型反推父母体型。**孩子是按值传入（不参与写回），父母是 `ref` 出参**。未装实例时两个 `ref` 出参原封不动。转发到 `IFaceGen.GenerateParentBody`。 |

### 年龄与索引查询

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GetBodyPropertiesWithAge` | `public static BodyProperties GetBodyPropertiesWithAge(ref BodyProperties originalBodyProperties, float age)` | 按年龄调整体型。**未装实例时原样返回入参**（尽管声明了 `ref`）。 |
| `GetMaturityTypeWithAge` | `public static BodyMeshMaturityType GetMaturityTypeWithAge(float age)` | 按年龄返回模型成熟度。**未装实例恒返回 `BodyMeshMaturityType.Child`**。 |
| `GetHairIndicesByTag` | `public static int[] GetHairIndicesByTag(int race, int curGender, float age, string tag)` | 按 tag 过滤可用发型索引。**未装实例返回 `Array.Empty<int>()`（非 null）**。 |
| `GetFacialIndicesByTag` | `public static int[] GetFacialIndicesByTag(int race, int curGender, float age, string tag)` | 同上，面部毛发。未装实例 `Array.Empty<int>()`。 |
| `GetTattooIndicesByTag` | `public static int[] GetTattooIndicesByTag(int race, int curGender, float age, string tag)` | 同上，纹身。未装实例 `Array.Empty<int>()`。 |
| `GetTattooZeroProbability` | `public static float GetTattooZeroProbability(int race, int curGender, float age)` | 「空纹身」的出现概率。未装实例返回 `0f`。 |

### 常量

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `MonsterSuffixSettlement` | `public const string MonsterSuffixSettlement = "_settlement"` | 聚落怪物 id 后缀，配合 `GetMonsterWithSuffix` 用。 |
| `MonsterSuffixSettlementSlow` | `public const string MonsterSuffixSettlementSlow = "_settlement_slow"` | 聚落「慢」变体后缀。 |
| `MonsterSuffixSettlementFast` | `public const string MonsterSuffixSettlementFast = "_settlement_fast"` | 聚落「快」变体后缀。 |
| `MonsterSuffixChild` | `public const string MonsterSuffixChild = "_child"` | 孩童怪物 id 后缀。 |

## 真实示例

先探活再干活（`GetRaceCount() == 0` 即未装实例）：

```csharp
int raceCount = FaceGen.GetRaceCount();
if (raceCount == 0)
{
    Debug.Print("FaceGen not initialized yet, skipping appearance work", 0);
    return;
}

string[] names = FaceGen.GetRaceNames();
Debug.Print("races=" + raceCount + " first=" + names[0], 0);
```

按种族与性别取一份随机体型（记得 `raceCount > 0` 的前置）：

```csharp
int race = FaceGen.GetRaceOrDefault("empire");

BodyProperties body = FaceGen.GetRandomBodyProperties(
    race,
    false,
    bodyPropertiesMin,
    bodyPropertiesMax,
    ArmorComponent.HairCoverTypes.None,
    -1,
    hairTags,
    beardTags,
    tattooTags,
    0f);

Debug.Print("age=" + body.Age + " key1=" + body.KeyPart1, 0);
```

在现有体型上就地改发型与配色（`ref` 参数，改的是原变量）：

```csharp
BodyProperties body = existingBody;

FaceGen.SetHair(ref body, hairIndex, beardIndex, tattooIndex);
FaceGen.SetPigmentation(ref body, skinColorIndex, hairColorIndex, eyeColorIndex);
FaceGen.SetBody(ref body, buildIndex, weightIndex);

Debug.Print("mutated key1=" + body.KeyPart1, 0);
```

查可用索引（未初始化时是空数组而不是 null，所以 `Length` 判空即可）：

```csharp
int[] hairIndices = FaceGen.GetHairIndicesByTag(FaceGen.GetRaceOrDefault("empire"), 0, 30f, "hair");
if (hairIndices.Length == 0)
{
    Debug.Print("no hair for this tag, or FaceGen not initialized", 0);
}
else
{
    Debug.Print("pick one of " + hairIndices.Length + " hair meshes", 0);
}
```

由体型推年龄成熟度与父母体型：

```csharp
BodyMeshMaturityType maturity = FaceGen.GetMaturityTypeWithAge(7.5f);
Debug.Print("maturity=" + maturity, 0);

BodyProperties mother;
BodyProperties father;
FaceGen.GenerateParentKey(childBody, FaceGen.GetRaceOrDefault("empire"), ref mother, ref father);
Debug.Print("mother key1=" + mother.KeyPart1 + " father key1=" + father.KeyPart1, 0);
```

后缀取怪物（聚落的快/慢/孩童变体）：

```csharp
Monster settlement = FaceGen.GetMonsterWithSuffix(
    FaceGen.GetRaceOrDefault("empire"),
    FaceGen.MonsterSuffixSettlement);

if (settlement != null)
{
    Debug.Print("settlement monster hitpoints=" + settlement.HitPoints, 0);
}
```

## 风险与边界

- **全部退化都是静默的。** 没有一个方法在未装实例时抛异常。**判断初始化状态用 `GetRaceCount() == 0`**，不要靠捕获异常。
- **`GetRandomBodyProperties` 未初始化时返回下限值。** 外观全部一样，且没有任何标记说明它是退化结果。
- **`GetBaseMonsterFromRace` 未初始化时返回 null，调用方直接解引用。** `BasicCharacterObject.MaxHitPoints()` 就是这个模式，栈顶会指向调用方而非本类。
- **`SetHair` / `SetBody` / `SetPigmentation` / `GenerateParentKey` 是 `ref` + void。** 没有任何返回值能确认生效；未初始化时静默 no-op。
- **`GetHairIndicesByTag` 等返回 `Array.Empty<int>()` 而非 null。** 判 `Length == 0` 即可，但如果你写成 `== null` 就会漏过退化状态。
- **`GetMaturityTypeWithAge` 退化时返回 `Child`。** 逻辑上「幼年」在多数分支里是安全兜底，但在按年龄筛模型的代码里会静默全落到儿童档。
- **`SetInstance` 是公开的。** 传 null 就等于卸载实现，后续所有外观操作退化。**mod 不该在运行期调它。**
- **`ShowDebugValues` / `UpdateDeformKeys` 是公开可写静态字段。** 它们由 native 侧读取，改了只对之后的帧生效，且在发行构建里可能无效。
- **参数名 `tatooTags` 拼写少一个 o。** 用具名参数调用时必须照抄源码拼写，否则编译不过。
- **同名不同类。** `TaleWorlds.Core.FaceGen`（本页，静态门面）与 `TaleWorlds.MountAndBlade.FaceGen`（`IFaceGen` 实现）是两个类型；后者所在的桶是 `mission-ext`，本文不链接它。`using` 两者同时存在时要写全限定名。
- **具体解码行为在 native 侧。** `SetHair` / `SetBody` / `SetPigmentation` 传索引之后到底怎么改位包，**实现在 native，行为未核实**；本类只能确认「调了之后 `ref` 参数被交回给调用方」。

## 跨版本提示

`bannerlord-1.3.15/TaleWorlds.Core/FaceGen.cs` 与 `bannerlord-1.4.6/TaleWorlds.Core/FaceGen.cs` 逐行比对，**public 表面完全一致**：26 条 public 成员（`SetInstance` + 19 个静态方法 + `ShowDebugValues` / `UpdateDeformKeys` 两个公开静态字段 + 四个 `MonsterSuffix*` 常量）。退化分支的返回值与 1.3.15 也逐字相同。`bannerlord-1.4.5/` 本机只有 DLL、无 C# 源码，未能核对。

## 依赖关系

- 实现接口：`IFaceGen`（`TaleWorlds.Core` 命名空间下，无独立页面），由 `TaleWorlds.MountAndBlade` 里的实现类在 `CreateInstance()` 时装入
- 产出物：[BodyProperties](../BodyProperties) 是它所有生成/改写方法的输入输出类型，内部由 [DynamicBodyProperties](../DynamicBodyProperties) 与 [StaticBodyProperties](../StaticBodyProperties) 组成
- 调用方：[BasicCharacterObject](../BasicCharacterObject) 的 `GetBodyProperties` / `MaxHitPoints` / `GetDefaultFaceSeed` 与 `Deserialize` 里的种族解析都经过本类
- 载荷类型：`GetRandomBodyProperties` 的 `hairCoverType` 参数来自护甲组件的 `HairCoverTypes` 枚举，[Equipment](../Equipment) 的槽位数据最终会走到这里
- 桶首页：[core-extra API 分区](../)