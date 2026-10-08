---
title: "PerkObject"
description: "一条 perk 的「定义」对象：把归属技能、解锁门槛、主/次两组效果、以及互斥的替代 perk 收在一个不可变的 sealed 数据类里；英雄「已获得哪些 perk」的状态不在本类，而在英雄侧。"
---
# PerkObject

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Type:** `public sealed class PerkObject : PropertyObject`
**Source:** `TaleWorlds.CampaignSystem/CharacterDevelopment/PerkObject.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`PerkObject` 是**perk 的定义**，不是「某个英雄已经点亮的 perk」。整局游戏里每种 perk 只有一份定义，所有角色共享；而「谁拥有哪个 perk」那份状态存在英雄侧（`Hero` / `HeroDeveloper`），本类只负责描述「这个 perk 长什么样、解锁它要什么条件、点亮后给什么效果」。

它继承 `PropertyObject`（`PropertyObject.cs:9`），因此天然带着两个 `TextObject` 标识——`Name`（`PropertyObject.cs:25`）与 `Description`（`PropertyObject.cs:41`）——以及基类那个 `Initialize(TextObject, TextObject)` 写入点（`PropertyObject.cs:56`）。`PerkObject` 自己的 `Initialize` 会先把主/次效果描述拼好，再回头调基类的 `Initialize` 把名字与最终描述落进 `PropertyObject`。

一条 perk 定义由三组要素构成，字段与源码一一对应：

- **归属与门槛**：`Skill`（`PerkObject.cs:38`）说明它挂在哪个技能上，`RequiredSkillValue`（`PerkObject.cs:43`）说明点亮它需要多少技能值。
- **两组效果**：主效果 `PrimaryRole`（`PerkObject.cs:53`）/ `PrimaryBonus`（`PerkObject.cs:63`）/ `PrimaryIncrementType`（`PerkObject.cs:73`）/ `PrimaryTroopUsageMask`（`PerkObject.cs:83`）/ `PrimaryDescription`（`PerkObject.cs:93`）；次效果由 `Secondary*` 五个同名成员（`PerkObject.cs:58`、`PerkObject.cs:68`、`PerkObject.cs:78`、`PerkObject.cs:88`、`PerkObject.cs:98`）平行提供。
- **互斥关系**：`AlternativePerk`（`PerkObject.cs:48`）指向与它二选一的那一条，且这个关系是对称的。

## 心智模型

把 perk 想成**「定义」与「实例」分居两侧的一对概念**：`PerkObject` 是定义侧，英雄的成长状态是实例侧。你在本类上读到的永远是「这条 perk 是什么」，永远读不到「某个英雄点没点它」。

- **全局表是只读视图。** `PerkObject.All`（`PerkObject.cs:27`）转发到 `Campaign.Current.AllPerks`，类型是 `MBReadOnlyList<PerkObject>`。它是「所有定义的登记册」，不是可写的集合——往里加东西这条路在这条属性上不存在。
- **一次性配置，之后只读。** 所有效果字段都是 `{ get; private set; }`。构造只拿一个 `stringId`（那是 `MBObjectBase` 的身份），真正的配置全部发生在 `Initialize(...)`（`PerkObject.cs:117`）这一次调用里：写名字、写技能、写门槛、写替代品、写两组效果，最后调 `AfterInitialized()`。构造完再想改字段，只能重走 `Initialize`。
- **主效果与次效果是同一套字段的两份。** 次效果服务于「另一个队伍角色 / 另一类兵种」的场景。`Initialize` 对次描述有个分支：若 `secondaryDescription` 是空串，最终 `Description` 就只是主描述；否则用 `str_string_newline_newline_string` 把主、次两段拼成一条两段式描述。
- **次效果的增量类型会回退。** 若 `secondaryIncrementType` 传 `EffectIncrementType.Invalid`，`Initialize` 静默让它继承主效果的 `incrementType`（`PerkObject.cs:78`）。所以「我只想配一个效果」时不用重复填第二遍增量类型。
- **替代关系是双向的、只需在一侧设置。** `Initialize` 里若 `alternativePerk != null`，会顺手把对方的 `AlternativePerk` 指回自己。因此你读 `AlternativePerk`（`PerkObject.cs:48`）拿到的永远是配对的另一条，无论当初是谁配置了谁。
- **bonus 怎么作用由 `EffectIncrementType` 决定。** 这个枚举（`EffectIncrementType.cs:6`）的取值是 `Invalid`、`Add`、`AddFactor`：`Add` 是直接加值，`AddFactor` 是按比例作用，`Invalid` 只作回退标记用。
- **效果落在谁身上，由另外两个枚举描述。** `PartyRole`（`PartyRole.cs:6`）标出效果作用的队伍角色（`Ruler`、`Governor`、`Scout`、`Quartermaster` 等），`TroopUsageFlags`（`TroopUsageFlags.cs:7`）是 `[Flags]` 位掩码，限定效果作用的兵种类型（`OnFoot`、`Mounted`、`Melee`、`Ranged` 等）。
- **「没配全」有一个哨兵属性。** `IsTrash`（`PerkObject.cs:102`）的实现是 `Name == null || Description == null || Skill == null`。它只查这三样，是「这条定义明显是残废的」的快速判定，不是完整校验。

## 怎么用

### 怎么拿到

**遍历全部定义**（最常见）：

```csharp
foreach (PerkObject perk in PerkObject.All)
{
    // perk 是定义，不是某个英雄的状态
}
```

**拿单条内置定义**：走 `DefaultPerks` 的静态属性。例如单手技能的那条 Duelist 是 `DefaultPerks.OneHanded.Duelist`（`DefaultPerks.cs:2000`）。内置 perk 都在这类静态属性上按技能分组暴露。

**不要自己 `new` 一个 `PerkObject` 来冒充内置 perk**：构造是公开的，但只有 `Initialize`（`PerkObject.cs:117`）能写字段，且自造的对象不会出现在 `PerkObject.All`（`PerkObject.cs:27`）里。

### 典型用法

**按技能 + 门槛筛选，并读它的效果与互斥项：**

```csharp
SkillObject oneHanded = DefaultSkills.OneHanded;
foreach (PerkObject perk in PerkObject.All)
{
    if (perk.IsTrash)                                  // 跳过没配全的定义
    {
        continue;
    }

    if (perk.Skill != oneHanded)                       // 只留单手技能
    {
        continue;
    }

    if (perk.RequiredSkillValue < 100f)                // 只看高门槛的
    {
        continue;
    }

    float primary = perk.PrimaryBonus;
    EffectIncrementType how = perk.PrimaryIncrementType;
    PerkObject alternative = perk.AlternativePerk;      // 与它二选一的那条
}
```

**把描述拿给 UI 显示：** `PrimaryDescription`（`PerkObject.cs:93`）与 `SecondaryDescription`（`PerkObject.cs:98`）都是 `TextObject`，而 `ToString()`（`PerkObject.cs:155`）会返回 `Name`，`Name` 为空时退回 `StringId`——所以直接对定义对象调 `ToString()` 是安全的兜底写法。

**自造一条定义（只在本 mod 内部用）：** 唯一公开的配置入口是 `Initialize`：

```csharp
var myPerk = new PerkObject("MyMod_TrainingDrill");
myPerk.Initialize(
    "训练操典",
    DefaultSkills.OneHanded,
    150,
    null,
    "部队每日训练时额外获得 {VALUE} 点单手经验",
    PartyRole.PartyLeader,
    10f,
    EffectIncrementType.Add);
```

描述串里的 `{VALUE}` 会被 `Initialize` 内部替换成「按 `EffectIncrementType` 格式化后的 bonus 文本」，所以效果数值不需要你自己拼进描述里。

### 坑

- **字段全是 `private set`，外部改不动。** `perk.PrimaryBonus = 5f` 编译不过。要改只能重走 `Initialize`（`PerkObject.cs:117`），而 `Initialize` 会一次性覆盖全部字段——你不能只改一个而保留其余。
- **`All` 只读，不能往全局表里加。** `PerkObject.All`（`PerkObject.cs:27`）是 `MBReadOnlyList<PerkObject>`，它转发 `Campaign.Current.AllPerks`。自造的 `PerkObject` 不会自动出现在升级界面或任何 UI 里。
- **`AlternativePerk` 是对称写入的。** 你在 `Initialize` 里填了对方，对方的 `AlternativePerk`（`PerkObject.cs:48`）就被改成指向你——不需要（也不应该）在两侧各配一次。
- **`requiredSkillValue` 是 `int` 进、`float` 存。** 参数收 `int`，落到 `RequiredSkillValue`（`PerkObject.cs:43`）时转成 `float`，比较时注意类型。
- **`SecondaryIncrementType` 传 `Invalid` 会静默回退。** 见 `PerkObject.cs:78`：传 `EffectIncrementType.Invalid` 时它取主效果的 `PrimaryIncrementType`，不会报错。想显式区分主/次增量方式，就必须两边都填实数。
- **`IsTrash` 不是完整校验。** 它只查 `Name` / `Description` / `Skill` 三样（`PerkObject.cs:102`）；门槛、bonus、角色、兵种掩码全为空它依然返回 `false`。
- **构造 `PerkObject(stringId)` 的参数只是身份，不是配置。** 只 `new` 而不 `Initialize`，得到的是一条 `IsTrash` 为 `true` 的空壳。

## 关键成员

| 成员 | 签名 | 作用 | 行号 |
| --- | --- | --- | --- |
| `PerkObject` | `public sealed class PerkObject : PropertyObject` | 定义侧类型本身；不可继承 | `PerkObject.cs:11` |
| `AutoGeneratedStaticCollectObjectsPerkObject` | `internal static void AutoGeneratedStaticCollectObjectsPerkObject(object o, List<object> collectedObjects)` | 存档对象图收集的静态入口，转发到实例方法 | `PerkObject.cs:14` |
| `AutoGeneratedInstanceCollectObjects` | `protected override void AutoGeneratedInstanceCollectObjects(List<object> collectedObjects)` | 把本对象登记进存档收集图 | `PerkObject.cs:20` |
| `All` | `public static MBReadOnlyList<PerkObject> All { get; }` | 全局定义表；转发 `Campaign.Current.AllPerks`，只读 | `PerkObject.cs:27` |
| `Skill` | `public SkillObject Skill { get; private set; }` | 这条 perk 归属的技能，也是门槛的比较对象 | `PerkObject.cs:38` |
| `RequiredSkillValue` | `public float RequiredSkillValue { get; private set; }` | 点亮所需技能值门槛；`int` 参数存入时转 `float` | `PerkObject.cs:43` |
| `AlternativePerk` | `public PerkObject AlternativePerk { get; private set; }` | 与它二选一的另一条 perk；关系双向 | `PerkObject.cs:48` |
| `PrimaryRole` | `public PartyRole PrimaryRole { get; private set; }` | 主效果作用的队伍角色 | `PerkObject.cs:53` |
| `SecondaryRole` | `public PartyRole SecondaryRole { get; private set; }` | 次效果作用的队伍角色 | `PerkObject.cs:58` |
| `PrimaryBonus` | `public float PrimaryBonus { get; private set; }` | 主效果数值，含义随 `PrimaryIncrementType` 变 | `PerkObject.cs:63` |
| `SecondaryBonus` | `public float SecondaryBonus { get; private set; }` | 次效果数值，默认 `0f` | `PerkObject.cs:68` |
| `PrimaryIncrementType` | `public EffectIncrementType PrimaryIncrementType { get; private set; }` | 主效果的作用方式（`Add` / `AddFactor`） | `PerkObject.cs:73` |
| `SecondaryIncrementType` | `public EffectIncrementType SecondaryIncrementType { get; private set; }` | 次效果作用方式；传 `Invalid` 时继承主效果的 | `PerkObject.cs:78` |
| `PrimaryTroopUsageMask` | `public TroopUsageFlags PrimaryTroopUsageMask { get; private set; }` | 主效果限定作用的兵种位掩码 | `PerkObject.cs:83` |
| `SecondaryTroopUsageMask` | `public TroopUsageFlags SecondaryTroopUsageMask { get; private set; }` | 次效果限定作用的兵种位掩码 | `PerkObject.cs:88` |
| `PrimaryDescription` | `public TextObject PrimaryDescription { get; private set; }` | 主效果描述文本；`{VALUE}` 会被替换成格式化后的 bonus | `PerkObject.cs:93` |
| `SecondaryDescription` | `public TextObject SecondaryDescription { get; private set; }` | 次效果描述文本；为空串时最终 `Description` 只含主描述 | `PerkObject.cs:98` |
| `IsTrash` | `public bool IsTrash { get; }` | 「没配全」哨兵：`Name`/`Description`/`Skill` 任一为 `null` 即真 | `PerkObject.cs:102` |
| `Initialize` | `public void Initialize(string name, SkillObject skill, int requiredSkillValue, PerkObject alternativePerk, string primaryDescription, PartyRole primaryRole, float primaryBonus, EffectIncrementType incrementType, string secondaryDescription = "", PartyRole secondaryRole = PartyRole.None, float secondaryBonus = 0f, EffectIncrementType secondaryIncrementType = EffectIncrementType.Invalid, TroopUsageFlags primaryTroopUsageMask = TroopUsageFlags.Undefined, TroopUsageFlags secondaryTroopUsageMask = TroopUsageFlags.Undefined)` | 唯一的公开配置入口：写名字、技能、门槛、替代品与两组效果，最后 `AfterInitialized()` | `PerkObject.cs:117` |
| `ToString` | `public override string ToString()` | 返回 `Name`，为空时退回 `StringId` | `PerkObject.cs:155` |

## 真实示例

一个每日审计 perk 定义的 Behavior：遍历全局定义表、按技能与门槛筛选、读效果与互斥项，末尾再演示一次 `Initialize(...)` 的完整配置。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.Core;

namespace MyMod
{
    public class PerkAuditBehavior : CampaignBehaviorBase
    {
        public override void RegisterEvents()
        {
            CampaignEvents.DailyTickHeroEvent.AddNonSerializedListener(this, OnDailyTickHero);
        }

        public override void SyncData(IDataStore dataStore)
        {
        }

        private void OnDailyTickHero(Hero hero)
        {
            SkillObject oneHanded = DefaultSkills.OneHanded;

            // 1) 遍历全局定义表：All 是只读视图，只能读、不能加
            foreach (PerkObject perk in PerkObject.All)
            {
                // 2) 跳过没配全的定义（Name/Description/Skill 任一为 null）
                if (perk.IsTrash)
                {
                    continue;
                }

                // 3) 只关心单手技能、门槛 >= 100 的 perk
                if (perk.Skill != oneHanded || perk.RequiredSkillValue < 100f)
                {
                    continue;
                }

                // 4) 读效果与互斥项：主/次两套字段是平行的
                float primary = perk.PrimaryBonus;
                EffectIncrementType primaryHow = perk.PrimaryIncrementType;
                float secondary = perk.SecondaryBonus;
                PerkObject alternative = perk.AlternativePerk;
                string tooltip = perk.PrimaryDescription.ToString();
            }

            // 5) 自造一条定义：唯一的公开配置入口是 Initialize(...)
            var trainingDrill = new PerkObject("MyMod_TrainingDrill");
            trainingDrill.Initialize(
                "训练操典",
                oneHanded,
                150,
                null,
                "部队每日训练时额外获得 {VALUE} 点单手经验",
                PartyRole.PartyLeader,
                10f,
                EffectIncrementType.Add,
                "作为总督时额外获得 {VALUE} 点单手经验",
                PartyRole.Governor,
                5f,
                EffectIncrementType.Add);
        }
    }
}
```

示例里值得单独点出的四处：

- `perk.IsTrash` 是遍历定义表时的第一道过滤（`PerkObject.cs:102`），它只查 `Name` / `Description` / `Skill`。
- `perk.Skill` 与 `perk.RequiredSkillValue` 是筛选的坐标轴（`PerkObject.cs:38`、`PerkObject.cs:43`）。
- `perk.AlternativePerk` 读到的永远是配对的那一条，因为 `Initialize` 会把关系写回双方（`PerkObject.cs:48`）。
- 自造定义时 `Initialize` 的参数顺序是「名字 → 技能 → 门槛 → 替代品 → 主描述 → 主角色 → 主数值 → 主增量类型 → 次描述 → 次角色 → 次数值 → 次增量类型 → 主兵种掩码 → 次兵种掩码」，后 6 个都有默认值（`PerkObject.cs:117`）。

若只想读、不想造，把第 5 步删掉即可——读取路径完全不依赖 `Initialize`：

```csharp
foreach (PerkObject perk in PerkObject.All)
{
    string name = perk.ToString();          // Name 为空时退回 StringId
    bool configured = !perk.IsTrash;
}
```

## 参见

- [`../../core-extra/PropertyObject`](../../core-extra/PropertyObject) —— 直接基类；`Name`、`Description` 与那个 `Initialize(TextObject, TextObject)` 都来自这里。
- [`../../core-extra/SkillObject`](../../core-extra/SkillObject) —— `Skill` 属性的类型，也是「一条 perk 挂在哪个技能下」的标识对象。
- [`../../campaign-ext/MBObjectBase`](../../campaign-ext/MBObjectBase) —— 继承链的根；`stringId` 身份与对象注册都定义在这一层。
- [`../Hero`](../Hero) —— perk 的持有侧；「谁点亮了哪个 perk」的状态存在英雄身上，本类只描述定义。
- [`../HeroDeveloper`](../HeroDeveloper) —— 授予 perk 与自动选 perk 的执行者，读 perk 定义的主要消费者。
- [`../CampaignEvents`](../CampaignEvents) —— 本页示例挂的 `DailyTickHeroEvent` 由它派发。
- [`../CampaignBehaviorBase`](../CampaignBehaviorBase) —— 本页示例的宿主基类。
- [`../_index`](../_index) —— `campaign` 桶全类型索引。

## 导航

- 同桶：[`../Hero`](../Hero) · [`../HeroDeveloper`](../HeroDeveloper) · [`../CharacterObject`](../CharacterObject)
- 父索引：[`../_index`](../_index)
