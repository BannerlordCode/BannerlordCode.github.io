---
title: "BannerEffect"
description: "旗帜效果条目：三个等级各一条百分比加成，按旗帜等级取值，供 BannerComponent 与伤害模型查询效果名称与格式化文本。"
---

# BannerEffect

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class BannerEffect : PropertyObject`
**Base:** `TaleWorlds.Core.PropertyObject` → `TaleWorlds.ObjectSystem.MBObjectBase`
**File:** `TaleWorlds.Core/BannerEffect.cs`

## 概述

71 行，一个 `sealed` 类，一条私有 `float[3]`——三级旗帜各一个百分比加成。它继承 `PropertyObject`（后者再继承 `MBObjectBase`），所以它**是有 `StringId` 的可寻址数据对象**；但它没有自己的 `Deserialize`，**数值只能通过 `Initialize` 从代码注入**。

三条公开能力：按等级取值（`GetBonusAtLevel`）、取值并格式化成百分比字符串（`GetBonusStringAtLevel`）、取值并生成带占位符的描述文本（`GetDescription`）。加上一个只读属性 `IncrementType`，说明这条效果是「加法」还是「乘系数」。

## 心智模型

把它想成**一张三级台阶的百分比表**。一条 `BannerEffect` 描述「把近战伤害提高 X%」，X 分三级由旗帜等级选。真正的查询方是 `BannerComponent`：它持有 `BannerLevel` 与 `BannerEffect` 两个属性，`GetBannerEffectBonus()` 一行就是 `this.BannerEffect.GetBonusAtLevel(this.BannerLevel)`。

真正施加效果的是 `TaleWorlds.CampaignSystem.BannerHelper.AddBannerBonusForBanner(DefaultBannerEffects.IncreasedMeleeDamage, activeBanner, ref explainedNumber)`——它被战斗与属性计算模型调用（`SandboxAgentApplyDamageModel` 里近战、远程、冲锋、盾伤各有几处，`SandboxAgentStatCalculateModel` 与 `SandboxBattleMoraleModel` 各有若干处）。

四条边界：

1. **等级越界不抛，会被夹到 0 或 2。** `GetBonusAtLevel` 先算 `bannerLevel - 1`，再过 `MBMath.ClampIndex(num, 0, 三)`。而 `MBMath.ClampIndex(value, minValue, maxValue)` 的实现是 `ClampInt(value, minValue, maxValue - 1)`——**上界传进来的是「长度」而不是「最后合法下标」，内部再减一**。所以等级 0 → 下标 -1 → 夹到 0；等级 99 → 下标 98 → 夹到 2。**查得到值，不报错，但拿到的是一级或三级的数。**

2. **`IncrementType` 只有赋值没有读取。** 源码里 `public EffectIncrementType IncrementType { get; private set; }` 被 `Initialize` 赋值，除此之外全文件没有任何地方读它。**效果是加是乘由调用方（`BannerHelper`）自己判断**，这个属性在核心库里是纯信息。

3. **`GetDescription` 会原地改 `Description`。** 正加成分支里它先造一个带 `{BONUSEFFECT}` 占位符的临时 `TextObject`，然后 `return base.Description.SetTextVariable("BONUS_AMOUNT", textObject);`——**直接对继承来的 `Description` 调 `SetTextVariable` 并返回**。也就是说每次调用都在改共享的那份描述文本。并发或重复调用时后一次的结果会覆盖前一次拼进去的变量。负加成走另一个分支，同样是 `base.Description.SetTextVariable(...)` 原地改。

4. **百分比格式是 `"{0:P2}"`。** `GetBonusStringAtLevel` 返回 `string.Format("{0:P2}", 取到的加成值)`——**跟着当前线程的 `CultureInfo`**。在非英语区域，浮点 `0.25f` 会格式化成 `25,00 %` 而不是 `25.00%`。做字符串比较或解析时别依赖它。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `public BannerEffect(string stringId)` | 只设 `StringId`，转发 `base(stringId)`。**三级加成数组保持全 0**，`IncrementType` 保持枚举默认值。 |
| `Initialize` | `public void Initialize(string name, string description, float level1Bonus, float level2Bonus, float level3Bonus, EffectIncrementType incrementType)` | **唯一的数值入口**。填 三级加成数组的前三格、设 `IncrementType`、构造名称与描述两个 `TextObject` 交给 `base.Initialize`，最后调 `base.AfterInitialized()`。 |
| `GetBonusAtLevel` | `public float GetBonusAtLevel(int bannerLevel)` | 按等级取值。`bannerLevel - 1` 过 `MBMath.ClampIndex(num, 0, 3)` 后索引三级加成数组。**1/2/3 对应下标 0/1/2；0 或负数拿一级；4 以上拿三级。** |
| `GetBonusStringAtLevel` | `public string GetBonusStringAtLevel(int bannerLevel)` | 取值后 `string.Format("{0:P2}", ...)`。**输出受当前区域文化影响。** |
| `GetDescription` | `public TextObject GetDescription(int bannerLevel)` | 生成带 `{BONUSEFFECT}` 与 `{BONUS_AMOUNT}` 占位符的描述。**对继承来的 `Description` 原地 `SetTextVariable`**，正加成时额外拼一个带本地化键的加号占位符。 |
| `IncrementType` | `public EffectIncrementType IncrementType { get; private set; }` | `Invalid` / `Add` / `AddFactor` 三值之一，说明这条效果是加法还是乘系数。**核心库里只有赋值没有读取。** |
| 三级加成数组 | `private readonly float[3]`（字段初始化时即分配） | 三个等级的加成，字段初始化时就已分配。**只有 `Initialize` 会写它。** |
| `ToString` | `public override string ToString()` | 返回 `base.Name.ToString()`，即**本地化名称而不是 id**。日志里看到的是显示名。 |

## 怎么用

### 怎么拿到它

`BannerEffect` 是 `public sealed class BannerEffect : PropertyObject`（`TaleWorlds.Core/BannerEffect.cs:8`），`PropertyObject` 又继承 `MBObjectBase`（`PropertyObject.cs:9`），所以它是**真正的 XML 对象**：由 `Game.LoadBasicFiles()` → `MBObjectManager.LoadXML(...)` 加载，在 `banners_effects.xml` 这类表里一行一个。

入口两条：

- 按 id 查：`MBObjectManager.Instance.GetObject<BannerEffect>(stringId)`——这也是 `BannerComponent` 反序列化时用的方式（`BannerComponent.cs:48`）。
- 按类型扫：`MBObjectManager.Instance.GetObjectTypeList<BannerEffect>()`。

构造器 `public BannerEffect(string stringId)`（`:16`）只赋 `StringId`；真正的三个等级加成由 `public void Initialize(string name, string description, float level1Bonus, float level2Bonus, float level3Bonus, EffectIncrementType incrementType)`（`:22`）填入。读取一律走 `GetBonusAtLevel(int bannerLevel)`（`:34`）、`GetBonusStringAtLevel(int)`（`:42`）、`GetDescription(int)`（`:49`）、`ToString()`（`:63`）。

### 典型用法

```csharp
using TaleWorlds.Core;
using System.Collections.Generic;

// 扫描全部旗帜效果
foreach (BannerEffect be in MBObjectManager.Instance.GetObjectTypeList<BannerEffect>())
{
    Debug.Print(be.StringId + " lvl3=" + be.GetBonusStringAtLevel(3), 0);   // BannerEffect.cs:42
    TextObject d1 = be.GetDescription(1);                                    // :49
    EffectIncrementType how = be.IncrementType;                              // :13
}

// 代码里建一个（不写 XML）
var custom = new BannerEffect("my_mod_effect");
custom.Initialize("单挑加成", "单挑伤害提高", 0.05f, 0.10f, 0.15f, EffectIncrementType.Add);   // :22
MBObjectManager.Instance.RegisterObject<BannerEffect>(custom);               // MBObjectManager.cs:147

// 消费端：拿到等级就用，绝不自己索引数组
float value = custom.GetBonusAtLevel(2);      // :34，内部做了 MBMath.ClampIndex
```

### 最容易踩的坑

**以为 `GetBonusAtLevel` 传任何等级都对应你写的三个数，于是写 `bannerLevel = 0` 或让 `BannerLevel` 跑到 4 以上。** 实现是 `int num = bannerLevel - 1; num = MBMath.ClampIndex(num, 0, this._levelBonuses.Length); return this._levelBonuses[num];`（`BannerEffect.cs:34-39`）——**越界不是报错，而是静默夹到端点**。传 0 得到的是第 1 级的加成，传 99 得到的也是第 3 级。所以一个 `banner_level` 写错成 `7` 的自定义旗帜物品不会崩，只会静默按满级生效；反过来如果你以为「超出范围返回 0」，判断逻辑就永远走不到拒绝分支。

第二个坑：`Initialize`（`:22`）可以在运行期被重复调用而不报错，`IncrementType` 和三个加成会被整组覆盖，但已经缓存过 `BannerEffect` 引用的地方（比如某个 `BannerComponent.BannerEffect`）会立刻看到新值——包括已经入队的存档数据。改加成要放在注册阶段（`MBSubModuleBase.RegisterSubModuleObjects` / `OnGameInitializationFinished`），不要放在读档后的回调里。

## 真实示例

按旗帜等级取加成（先看越界会被夹到哪里）：

<!-- xml-id-unverifiable: v1.4.6 -->
> ⚠️ 不可验证：本页全部字符串 id（下方代码示例中的）在 v1.4.6 源码树均无法核对——该版本未随附 XML 语料。
```csharp
BannerEffect effect = MBObjectManager.Instance.GetObject<BannerEffect>("increased_melee_damage");

if (effect == null)
{
    Debug.Print("banner effect not loaded", 0);
    return;
}

for (int level = 1; level <= 3; level++)
{
    float bonus = effect.GetBonusAtLevel(level);
    Debug.Print("level " + level + " bonus=" + bonus + " text=" + effect.GetBonusStringAtLevel(level), 0);
}

Debug.Print("level 0 clamps to " + effect.GetBonusAtLevel(0), 0);
Debug.Print("level 99 clamps to " + effect.GetBonusAtLevel(99), 0);
Debug.Print("incrementType=" + effect.IncrementType, 0);
Debug.Print("toString=" + effect.ToString(), 0);
```

从物品的旗帜组件读当前等级的加成（真正的调用形状）：

```csharp
ItemObject bannerItem = MBObjectManager.Instance.GetObject<ItemObject>("banner_empire_1");

if (bannerItem == null || bannerItem.BannerComponent == null)
{
    Debug.Print("not a banner item", 0);
    return;
}

BannerComponent banner = bannerItem.BannerComponent;
Debug.Print("bannerLevel=" + banner.BannerLevel, 0);

float applied = banner.GetBannerEffectBonus();
Debug.Print("applied bonus=" + applied, 0);
```

程序化建一条自定义效果（构造器不设任何数值，`Initialize` 是唯一入口）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

// 读者侧演示组件，不是游戏 API；以下方法仅示意调用形状
public static class BannerEffectFactory
{
    public static BannerEffect Create(string stringId)
    {
        BannerEffect effect = new BannerEffect(stringId);
        effect.Initialize(
            "{=my_banner_fx}Mount Speed",
            "{=my_banner_fx_desc}Increases mount movement speed.",
            0.05f,
            0.1f,
            0.15f,
            EffectIncrementType.AddFactor);
        return effect;
    }
}

BannerEffect mine = BannerEffectFactory.Create("my_mount_speed_banner_fx");
Debug.Print("l1=" + mine.GetBonusAtLevel(1) + " l3=" + mine.GetBonusAtLevel(3), 0);
Debug.Print("string=" + mine.GetBonusStringAtLevel(2), 0);
```

遍历全部旗帜效果，检查哪些没配数值（默认构造出来的实例三档全 0）：

```csharp
List<BannerEffect> effects = MBObjectManager.Instance.GetObjectTypeList<BannerEffect>();

int zeroed = 0;
for (int i = 0; i < effects.Count; i++)
{
    BannerEffect effect = effects[i];
    float l1 = effect.GetBonusAtLevel(1);
    float l3 = effect.GetBonusAtLevel(3);
    if (l1 == 0f && l3 == 0f)
    {
        zeroed++;
        Debug.Print("unconfigured: " + effect.StringId, 0);
    }
}

Debug.Print("total=" + effects.Count + " unconfigured=" + zeroed, 0);
```

## 风险与边界

- **`sealed`，不能继承。** 而且没有 `Deserialize`——**数值不会从 XML 装载**，必须由代码调 `Initialize` 注入。
- **构造出来是全 0。** `.ctor` 只设 `StringId`。忘了调 `Initialize` 就是三条 0 加成，不报错。
- **`GetBonusAtLevel` 不抛越界。** `MBMath.ClampIndex` 会把下标夹进 `[0, 2]`。**传错等级不会炸，只会静默拿到一级或三级的值**——排查数值不对时先检查等级。
- **`MBMath.ClampIndex` 的上界语义是「长度」。** 源码是 `ClampInt(value, minValue, maxValue - 1)`。本类传的正是三级加成数组的长度（3），拿到 `[0, 2]`。**你自己调这个方法时别再减一。**
- **`GetDescription` 原地改共享状态。** `base.Description.SetTextVariable(...)` 返回的也是那一份。同一个 `BannerEffect` 被多次查询不同等级，描述文本会被后一次覆盖。
- **`GetBonusStringAtLevel` 受区域文化影响。** `"{0:P2}"` 跟随线程文化，非英语区会输出逗号做小数点。**不要解析它，也不要拿它做等值比较。**
- **`IncrementType` 在核心库里没有读者。** 想知道这条效果是加是乘，得看 `BannerHelper.AddBannerBonusForBanner` 那一侧怎么用。
- **百分比语义依赖调用方。** 三级加成数组存的是 `0.05f` 还是 `5f`，取决于 `EffectIncrementType` 与 `BannerHelper` 的约定。**核心库自己不解释。**
- **`ToString` 返回名称不是 id。** 日志里看到的是本地化后的显示名，跨语言环境还会变。
- **`Description` 与 `Name` 都来自 `Initialize`。** 名字与描述都是硬编码英文字符串（带 `{=key}`），本地化在 `TextObject` 层解决。

## 依赖关系

- 基类：[PropertyObject](../PropertyObject) 提供 `Name` / `Description` / `Initialize(TextObject, TextObject)` / `AfterInitialized()`，再往上继承 [MBObjectBase](../../campaign-ext/MBObjectBase) 提供 `StringId`
- 索引入口：[MBObjectManager](../../campaign-ext/MBObjectManager) 的 `GetObject<BannerEffect>(stringId)` 与 `GetObjectTypeList<BannerEffect>()`
- 唯一查询方：[BannerComponent](../BannerComponent) 的 `BannerLevel` 与 `BannerEffect` 属性，`GetBannerEffectBonus()` 直接调本类的 `GetBonusAtLevel`
- 施加方：`TaleWorlds.CampaignSystem.BannerHelper.AddBannerBonusForBanner`，由 `TaleWorlds.Core.DefaultBannerEffects` 提供具体条目常量
- 战斗接入：`TaleWorlds.SandBox.GameComponents.SandboxAgentApplyDamageModel`（近战、远程、冲锋、盾伤）与 `SandboxAgentStatCalculateModel`（移动速度、命中惩罚）逐条调用
- 士气接入：`TaleWorlds.SandBox.GameComponents.SandboxBattleMoraleModel`（士气冲击增减）
- 数学内核：`TaleWorlds.Library.MBMath.ClampIndex` / `ClampInt`，容差与边界都在这一层
- 增量类型：`TaleWorlds.Core.EffectIncrementType`（`Invalid` / `Add` / `AddFactor`）
- 物品侧：[ItemObject](../ItemObject) 的 `BannerComponent` / `HasBannerComponent` 与 `IsBannerItem`
- 本地化：[TextObject](../../localization/TextObject) 承载名称与描述，`SetTextVariable` 在这里做占位符替换
- 模块地图：[module-map](../../../architecture/module-map)
- 桶首页：[core-extra API 分区](../)

## 导航

- 同桶：[`../PropertyObject`](../PropertyObject) · [`../BannerComponent`](../BannerComponent) · [`../ItemObject`](../ItemObject)
- 父索引：[`../_index`](../_index)
