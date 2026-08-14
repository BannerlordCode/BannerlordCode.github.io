---
title: "SmithingModel"
description: "把部件、武器设计、材料与英雄工艺技能换算成锻造/熔炼/精炼的难度、材料与能量成本、技能经验和部件研究点的可替换规则模型。"
---
# SmithingModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class SmithingModel : MBGameModel<SmithingModel>`  
**基类:** `MBGameModel<SmithingModel>`  
**源文件:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem.GameComponents.DefaultSmithingModel`

## 一句话职责

它把武器部件、武器设计、原材料和英雄的工艺技能与 Perk 换算成「难度、材料/金币成本、能量消耗、技能经验、部件研究点」这些数字，供铁匠界面和锻造/熔炼/精炼行为消费——它只计算并输出这些数值，自己不生成、不发放任何物品，也不会把成品塞进队伍。

## 心智模型

这是铁匠系统的规则层（rule layer）。锻造 UI、熔炼 UI 和各种 smithing 行为在需要数值时，统一向 `Campaign.Current.Models.SmithingModel` 要结果：难度决定品质区间，材料成本（`int[]`）喂给 UI 的资源条，能量成本决定英雄当天还能做几次动作，技能经验与研究点写入英雄的成长记录。

计算链是：UI/行为传入 `WeaponDesign`、`ItemObject`、`CraftingPiece`、`Hero` 等输入 → 模型计算难度（`GetCraftingPartDifficulty` / `CalculateWeaponDesignDifficulty`）、成本（材料 `int[]` 与能量 `int`）、经验/研究点 → 调用方拿这些数字去驱动界面或交给 smithing 行为实际产出物品。模型本身是纯函数式的：相同输入应得到相同输出，它不缓存、不修改传入对象（除显式 `ref` 的两个精炼方法外），也不触发世界状态变化。

使用这个模型，是为了改写所有消费者看到的「计算规则」——例如让高等级图纸更难、让熔炼更省能量、让研究点更快积累。如果目标是真正造出一把武器、把成品加进队伍或物品栏，应使用 smithing/crafting 行为（如 `SmithingBehavior` 一族）配合 `ItemRoster` / `Equipment` API，或对应的 `*Action`；**不要**在模型的方法回调里 `new ItemObject`、直接写入 `PartyBase` 或调用发放逻辑，那会把一个只读查询变成每次读取都重复执行的副作用，并且绕过每日能量与材料校验。

`ref` 参数要特别注意：`GetSkillXpForRefining` 与 `GetEnergyCostForRefining` 的 `ref Crafting.RefiningFormula` 意味着配方结构是按引用传入的——默认实现虽然未修改它，但签名承诺调用方可就地改写该结构，调用方不应假设配方在调用前后保持不变，也不要对来自懒枚举（`GetRefiningFormulas` 的迭代变量）的只读副本取 `ref`。

`int[]` 返回值的长度是 9，下标顺序严格对应 `CraftingMaterials` 枚举（`0 = IronOre`、`1 = Iron1` … `6 = Iron6`、`7 = Wood`、`8 = Charcoal`）。`GetSmithingCostsForWeaponDesign` 返回负值表示要消耗该材料，`GetSmeltingOutputForItem` 返回正值表示熔炼回收量；两个方法末尾的 `array[8]--` 都针对下标 8（木炭）做额外扣减，代表设计本身的「隐性」材料支出。自定义实现务必返回长度为 9 且非 `null` 的数组，否则 UI 按固定下标读取会越界崩溃或写入脏数据。

### 生命周期与注册

`Campaign.Current.Models` 持有当前实例，访问器就是 `Campaign.Current.Models.SmithingModel`。默认实例 `DefaultSmithingModel` 由游戏启动器在战役初始化阶段通过 `IGameStarter.AddModel` 注册；自定义实现也必须在战役系统开始查询模型之前完成注册。标题界面、模块加载早期或没有活动战役时，`Campaign.Current` 可能为 `null`，**不能**在静态字段初始化器或菜单构造函数里无条件读取它——任何访问都要先 `null` 检查。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役与 `Models` 注册表，模型的唯一获取入口。 |
| [`Hero`](../../campaign/Hero) | 提供 `Crafting` 技能值、各类 Perk（`PracticalRefiner`/`PracticalSmith`/`PracticalSmelter`/`CharcoalMaker`/`SteelMaker*`) 与每日能量状态；能量成本据此生成。 |
| [`ItemObject`](../../core-extra/ItemObject) | 被熔炼/锻造的物品、材料映射目标（`DefaultItems`），提供 `Value`、`Tier` 与 `WeaponDesign`。 |
| [`CraftingPiece`](../../core-extra/CraftingPiece) | 锻造部件，提供 `PieceTier`、`PieceType` 与 `MaterialsUsed`。 |
| [`WeaponDesign`](../../core-extra/WeaponDesign) | 武器设计，提供 `UsedPieces`、`Template` 与 `ItemModifierGroup`。 |
| [`WeaponDesignElement`](../../core-extra/WeaponDesignElement) | 设计中的单个部件槽，提供 `IsValid`、`ScaleFactor` 与 `CraftingPiece`。 |
| [`CraftingMaterials`](../../core-extra/CraftingMaterials) | 材料枚举，决定所有 `int[]` 返回值的下标顺序。 |
| [`Crafting`](../../core-extra/Crafting) | 承载 `RefiningFormula` 嵌套类型。 |
| [`RefiningFormula`](../../core-extra/RefiningFormula) | 精炼配方结构（`Input1`/`Input2`/`Output`/`OutputCount`）；两个精炼方法用 `ref` 就地传入。 |
| [`ItemModifier`](../../core-extra/ItemModifier) | `GetCraftedWeaponModifier` 返回的武器品质修饰符。 |
| [`ExplainedNumber`](../ExplainedNumber) | 承载能量成本、研究点结果及可解释因素。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`SmeltingVM`](../SmeltingVM) | 熔炼界面读取 `GetSmeltingOutputForItem` 与 `GetEnergyCostForSmelting`。 |
| [`WeaponDesignVM`](../WeaponDesignVM) | 锻造界面读取难度与 `GetSmithingCostsForWeaponDesign`。 |
| [`ItemRoster`](../ItemRoster) | 熔炼/锻造产出的材料与武器最终进入物品栏；不应在回调里直接写入。 |
| [`Equipment`](../../core-extra/Equipment) | 锻造产出的武器最终会进装备槽位，由行为而非模型负责。 |
| [`SkillObject`](../../core-extra/SkillObject) | 常量层，提供 `Crafting` 技能定义引用。 |

### Action、事件与存档边界

模型自身不派发事件、不持有任何存档字段，结果对调用方是只读的。真正生成物品、扣材料、扣能量的逻辑在 smithing/crafting 行为中执行，并通过 `ItemRoster` 写入；英雄的每日能量状态由战役行为维护。自定义实现应保持确定性（相同输入得到相同能量成本/经验），否则会与存档里记录的每日能量计数不一致，导致坏档或重复计数。

## 成员契约

### 难度计算

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `GetCraftingPartDifficulty(CraftingPiece)` → `int` | 返回单个部件难度，默认实现为 `PieceTier * 50`（空部件为 0）。 | 设计难度汇总时按部件类型加权累加；只读，无副作用。 |
| `CalculateWeaponDesignDifficulty(WeaponDesign)` → `int` | 按部件类型权重（刃 100、护手 20、握柄 60、柄头 20）汇总整把武器难度。 | 锻造前或品质区间计算时调用；只读。 |
| `ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount)` → `float` | 解锁新部件所需的研究点，公式 `sqrt(100/total) * (opened*9 + 10)`。 | 部件研究面板读取；只读。 |

### 锻造结果（品质与修饰符）

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `GetCraftedWeaponModifier(WeaponDesign, Hero)` → `ItemModifier` | 依据设计难度与英雄 `Crafting` 技能值做品质加权随机，再从模板的 `ItemModifierGroup` 按品质取一个修饰符。 | 锻造产出确定修饰符时调用；内部会读取 Perk（`ExperiencedSmith`/`MasterSmith`/`LegendarySmith`）调整概率。无世界副作用，但含随机。 |

### 精炼配方与材料映射

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `GetRefiningFormulas(Hero)` → `IEnumerable<Crafting.RefiningFormula>` | 返回该英雄可用的精炼配方，含 Perk 门控项（`CharcoalMaker`/`IronMaker`/`SteelMaker*`）。 | 精炼 UI 枚举配方；懒枚举，逐条 `yield return`，只读。 |
| `GetCraftingMaterialItem(CraftingMaterials)` → `ItemObject` | 把材料枚举映射到 `DefaultItems`（矿石、各级铁锭、硬木、木炭）。 | UI 显示材料图标或熔炼成本换算时调用；只读。 |

### 熔炼与锻造成本

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `GetSmeltingOutputForItem(ItemObject)` → `int[]` | 返回长度 9 的回收量数组（按 `CraftingMaterials` 顺序为正值），含 `AddSmeltingReductions` 的下调。 | 熔炼前预览回收；默认实现已校验 `item.WeaponDesign != null`，只读。 |
| `GetSmithingCostsForWeaponDesign(WeaponDesign)` → `int[]` | 返回长度 9 的材料成本（负值=消耗），末尾 `array[8]--` 扣木炭。 | 锻造前预览消耗；只读。 |

### 能量消耗（每日动作上限）

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `GetEnergyCostForRefining(ref Crafting.RefiningFormula, Hero)` → `int` | 精炼能量成本，默认基准 6，受 `PracticalRefiner` Perk 加成。 | 精炼前校验当日能量；`ref` 配方可能被就地改写。 |
| `GetEnergyCostForSmithing(ItemObject, Hero)` → `int` | 锻造能量成本，默认 `10 + 5*Tier`，受 `PracticalSmith` 加成。 | 锻造前校验；参与每日可锻次数上限。 |
| `GetEnergyCostForSmelting(ItemObject, Hero)` → `int` | 熔炼能量成本，默认 10，受 `PracticalSmelter` 加成。 | 熔炼前校验；参与每日可熔次数上限。 |

### 技能经验与部件研究

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `GetSkillXpForRefining(ref Crafting.RefiningFormula)` → `int` | 精炼经验，默认 `0.3 * 产出物.Value * OutputCount`。 | 精炼结算时；`ref` 配方可能被就地改写。 |
| `GetSkillXpForSmelting(ItemObject)` → `int` | 熔炼经验，默认 `0.02 * item.Value`。 | 熔炼结算时；只读。 |
| `GetSkillXpForSmithingInFreeBuildMode(ItemObject)` → `int` | 自由锻造经验，默认 `0.02 * item.Value`。 | 自由模式锻造结算；只读。 |
| `GetSkillXpForSmithingInCraftingOrderMode(ItemObject)` → `int` | 订单模式锻造经验，默认 `0.1 * item.Value`。 | 订单模式结算；只读。 |
| `GetPartResearchGainForSmeltingItem(ItemObject, Hero)` → `int` | 熔炼带来的部件研究点，受 `CuriousSmelter` 加成。 | 熔炼结算时；只读。 |
| `GetPartResearchGainForSmithingItem(ItemObject, Hero, bool isFreeBuild)` → `int` | 锻造带来的研究点，受 `CuriousSmith` 与自由模式 +10% 加成。 | 锻造结算时；只读。 |

## 真实读取路径

下面两段只查询当前战役中已注册的模型，先于任何 UI 计算调用；顺序与铁匠界面实际读取一致：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

// 估算一把图纸的锻造成本与能量消耗
public int EstimateCrafting(WeaponDesign design, ItemObject crafted, Hero smith)
{
    if (Campaign.Current == null || design == null || smith == null)
    {
        return -1;
    }

    SmithingModel model = Campaign.Current.Models.SmithingModel;
    int[] materialCosts = model.GetSmithingCostsForWeaponDesign(design);
    int energy = model.GetEnergyCostForSmithing(crafted, smith);
    int xp = model.GetSkillXpForSmithingInFreeBuildMode(crafted);

    // materialCosts[i] < 0 表示第 i 号材料（CraftingMaterials 枚举顺序）被消耗
    // materialCosts[8] 是木炭（Charcoal）的隐性设计成本
    return energy;
}
```

下面这段演示遍历英雄的精炼配方，并对每条取经验与能量成本。注意 `ref` 传递：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

public void InspectRefining(Hero smith)
{
    if (Campaign.Current == null || smith == null)
    {
        return;
    }

    SmithingModel model = Campaign.Current.Models.SmithingModel;
    foreach (var formula in model.GetRefiningFormulas(smith))
    {
        // formula.Input1 / Input2 / Output 是 CraftingMaterials 枚举值
        int xp = model.GetSkillXpForRefining(ref formula);
        int energy = model.GetEnergyCostForRefining(ref formula, smith);
        // 这里 formula 可能已被就地修改，不要再当作不可变快照使用
    }
}
```

这些结果适合调试或 UI 预览；真正扣材料、扣能量、产出成品应交给 smithing/crafting 行为，不要在此直接创建 `ItemObject` 或写入 `ItemRoster`。

## 风险与调试顺序

1. **战役尚未存在：** `Campaign.Current` 在标题界面、模块加载早期或没有活动战役时为空；任何访问前都先 `null` 检查，延迟到战役启动钩子再取模型。
2. **`ref` 配方被改写：** `GetSkillXpForRefining` 与 `GetEnergyCostForRefining` 通过 `ref` 传入 `RefiningFormula`，调用后该结构可能已变；不要对来自 `GetRefiningFormulas` 懒枚举的迭代变量再做 `ref` 传递，也不要假设它不变。
3. **`int[]` 长度或顺序错误：** 返回数组必须为长度 9 且非 `null`，下标严格对应 `CraftingMaterials`（注意下标 8 是木炭的隐性成本）。自定义实现返回错误长度或 `null` 会让 UI 越界崩溃，或把脏数据写进熔炼/锻造结果。
4. **查询回调里生成或发放物品：** 在模型方法内部 `new ItemObject`、写入 `PartyBase`、调用发放逻辑会绕过每日能量与材料校验，并变成每次读取都执行的副作用——产出必须由行为 + `ItemRoster`/对应 `Action` 完成。
5. **能量成本为零或负数：** 能量成本参与「英雄每日可锻/熔/精炼次数」上限；若返回 `0` 或负数会让英雄无限次操作，破坏经济平衡，也可能与存档中的每日能量计数不一致导致坏档。
6. **`ItemObject.WeaponDesign` 为空：** 熔炼非武器/非锻造物品时 `item.WeaponDesign` 可能为 `null`；默认实现已先校验，自定义实现若去掉该校验会在 `UsedPieces` 上抛空引用异常。

## 版本与导航

v1.3.15 与 v1.4.5 的接口签名一致（含 `ref Crafting.RefiningFormula` 的两个能量/经验方法），默认实现中的 Perk 门控（`CharcoalMaker`/`IronMaker`/`SteelMaker*`、`Practical*`、`Curious*`）也均存在。跨版本替换模型时，优先委托当前版本的 vanilla 默认实现，再叠加自己的有界修正，避免复制旧版公式丢掉了新版本的 Perk 与品质逻辑。

- [队伍模型目录](../models/)
- [父级：Campaign 扩展 API](../)
- [↔ CharacterDevelopmentModel](../CharacterDevelopmentModel)
- [↔ BarterModel](../BarterModel)
- [↔ WorkshopModel](../WorkshopModel)
- [SmeltingVM](../SmeltingVM)
- [WeaponDesignVM](../WeaponDesignVM)
- [ItemRoster](../ItemRoster)
- [Hero](../../campaign/Hero)
- [Campaign](../../campaign/Campaign)
- [崩溃与存档边界](../../../architecture/crash-boundaries)
- [战役系统指南](../../../guide/campaign-system)
