---
title: "SmithingModel"
description: "战役层的锻造规则模型：计算可锻造部件难度、武器设计难度、武器品质、精炼/锻造/熔炼的精力消耗、材料收支、技能经验与部件研究点。"
---
# SmithingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SmithingModel : MBGameModel<SmithingModel>`  
**Base:** `MBGameModel<SmithingModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSmithingModel.cs`

## 一句话职责

`SmithingModel` 把武器设计（部件组合、尺寸、模板）翻译成可解释的数值：每块部件的难度、整把武器的设计难度、随机抽到的武器品质、精炼/锻造/熔炼分别消耗多少铁匠精力、熔炼能回收哪些材料、以及每次操作给铁匠的技能经验和部件研究点。它本身不持有任何进度，也不直接创建 `ItemObject`。

## 心智模型

`SmithingModel` 是战役（Campaign）层的一个**纯规则计算器**，由游戏启动器注册进 `Campaign.Current.Models`，默认实现是 `DefaultSmithingModel`。它和 CraftingSystem 的关系是职责分离：

- **CraftingSystem**（`TaleWorlds.CampaignSystem.CraftingSystem` 的 `CraftingPiece`、`CraftingTemplate`，以及 `TaleWorlds.Core` 的 `WeaponDesign`、`Crafting`）描述"这把武器由哪些部件、以何种尺寸组成、长得什么样"。
- **`SmithingModel`** 描述"按这套设计锻造/熔炼/精炼，代价和产出是多少"——它是无状态的数值策略。
- **`CraftingCampaignBehavior`**（实现 `ICraftingCampaignBehavior`）是真正的"执行者"：它读取 `SmithingModel` 算出的精力、经验、材料，去扣减 `Hero` 的锻造体力、给 `Hero` 加技能经验、把材料写进队伍 `ItemRoster`、把生成的 `ItemObject` 塞进 `Equipment` 或订单。
- **真正的 `ItemObject` 生成**发生在 `TaleWorlds.Core` 的 `Crafting.GenerateItem`，而不是 `SmithingModel`。`SmithingModel` 只回答"如果生成并锻造这件物品，代价/品质/经验是多少"。

生命周期上：战役开始 → 启动器把 `SmithingModel = GetGameModel<SmithingModel>()` 注入 `GameModels`（见 `GameModels.cs:280`）→ 铁匠铺 UI 与 `CraftingCampaignBehavior` 在玩家每次精炼/锻造/熔炼时查询它 → 战役结束随 `Campaign` 一起释放。替换实现必须在战役查询前通过 `CampaignGameStarter`/SubModule 替换 `Models.SmithingModel`。

```text
WeaponDesign (部件+尺寸+模板)
   │  查询数值
   ▼
Campaign.Current.Models.SmithingModel   （无状态，可替换）
   │  返回：难度 / 品质 / 精力 / 材料 / 经验 / 研究点
   ▼
CraftingCampaignBehavior   （扣体力、加经验、改 ItemRoster、落装备/订单）
   │
   ▼
Crafting.GenerateItem → ItemObject → Equipment / Town 订单
```

要注意：`SmithingModel` 的全部方法都是**只读查询**，它们不修改任何世界状态。任何"扣精力、给经验、回收材料"的副作用都发生在 `CraftingCampaignBehavior` 里，调用方（包括你的 mod）负责在拿到数值后自行落地。

## 何时用 / 何时不要用

**用它（或替换它）的场景：**
- 想**改变锻造规则**：例如让高级武器消耗更多精力、让熔炼返还更多材料、调整品质概率曲线——继承 `DefaultSmithingModel` 重写对应方法，并在 SubModule 启动时替换 `Campaign.Current.Models.SmithingModel`。
- 想在自定义 UI/作弊指令里**预览**某把设计会消耗多少精力、给多少经验、能熔炼回哪些材料——直接读 `Campaign.Current.Models.SmithingModel`。

**不要用它做的场景：**
- **不要绕过 `CraftingCampaignBehavior` 直接 new 一个 `ItemObject` 塞进 `Equipment` 或队伍背包。** 这样会跳过体力检查、订单记录、历史记录与 `IsCraftedByPlayer` 标记，造成坏档与状态不一致。生成武器请走 `ICraftingCampaignBehavior.CreateCraftedWeaponInFreeBuildMode` / `CreateCraftedWeaponInCraftingOrderMode`。
- **不要在模型回调里写入 `Hero` 体力或 `ItemRoster`。** `SmithingModel` 的方法必须是纯函数（读 `Hero` 的 Perk/技能、读 `ItemObject` 的数值），副作用留给行为层。
- 不要在标题界面、菜单早期或 `Campaign.Current == null` 时调用——此时 `Models` 尚未注册。

## 依赖图

`SmithingModel` 只通过参数接收数据、通过 `Campaign.Current.Models` 被持有，不直接引用下游类型；下游由 `CraftingCampaignBehavior` 串接。

### 上游（提供数据 / 持有者）

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 通过 `Campaign.Current.Models.SmithingModel` 持有并暴露本模型；`Campaign.Current` 为空时不可访问。 |
| [`Hero`](../../campaign/Hero) | 作为铁匠传入，提供 Crafting 技能值与 SteelMaker/PracticalSmith 等 Perk，决定品质概率与精力折扣。 |
| [`ItemObject`](../../core/ItemObject) | 熔炼/锻造查询的输入与精力基数（`Tier`、`Value`、`WeaponDesign`）。 |
| [`WeaponDesign`](../../core-extra/WeaponDesign) | 武器设计的载体（`UsedPieces`、模板、`WeaponFlags`），是所有难度/成本计算的输入。 |

### 下游（消费结果 / 执行副作用）

| Type | Relation |
| --- | --- |
| [`CraftingCampaignBehavior`](../CraftingCampaignBehavior) | 真正的执行者：用本模型算出的精力/经验/材料去扣体力、加技能、回收材料、落装备与订单。 |
| [`Equipment`](../../core-extra/Equipment) | 生成的 `ItemObject` 最终进入 `Hero`/`MobileParty` 的 `Equipment` 槽位（由行为层落地）。 |
| [`Settlement`](../../campaign/Settlement) | 城镇（`Town`）承载锻造订单与材料库存，是锻造流程的地理入口。 |
| [`ItemObject`](../../core/ItemObject) | 由 `Crafting.GenerateItem` 生成本体，本模型只读其属性、不负责创建。 |

## 风险

1. **`Campaign.Current` 为空**：标题界面、模块早期或战役未加载时 `Models` 尚未注册，调用会 `NullReferenceException`。任何访问前先判空。
2. **模型空替换 / 替换时机错误**：若你在战役已经开始后才替换 `Models.SmithingModel`，已经缓存的旧数值（如锻造 UI 预览）会不一致。替换必须在 `CampaignGameStarter` 初始化阶段完成。
3. **在纯计算里改状态**：`GetCraftedWeaponModifier` 内部用 `MBRandom` 抽品质，本身是随机的，但**不应**在模型方法里去写 `Hero` 体力或 `ItemRoster`——保持方法无副作用，否则替换存档/回放会出问题。
4. **NaN / 负数 / 除零**：`CalculateWeaponDesignDifficulty` 用 `num2 / num` 加权，若设计退化到没有任何有效部件（`num == 0`）会抛除零异常（实际武器总有 Blade，但仍要对自定义退化设计做防护）。`GetSmithingCostsForWeaponDesign` 返回的是**负值**表示消耗、`GetSmeltingOutputForItem` 是**正值**表示回收，混用符号会算错材料账。
5. **精力漏洞**：`GetEnergyCostFor*` 只"算"不"扣"。如果你只调用模型却不调用 `CraftingCampaignBehavior.SetHeroCraftingStamina` 落地扣减，玩家可以无限免费锻造/熔炼，破坏经济平衡。
6. **坏档数据**：直接 new `ItemObject` 塞背包会跳过 `CraftingCampaignBehavior` 的订单/历史/`IsCraftedByPlayer` 逻辑，导致存档里出现游离的"伪造"武器，重开时 `Crafting.CreatePreCraftedWeaponOnDeserialize` 可能不匹配。
7. **`ref Crafting.RefiningFormula` 参数**：`GetSkillXpForRefining` / `GetEnergyCostForRefining` 接受 `ref` 配方，调用方传入的配方会被读取其 `Output`/`OutputCount`，确保传入的是有效配方而非默认 `null` 结构。

## 成员（按主题）

> 以下均为 `abstract`，具体数值来自 `DefaultSmithingModel`；所有方法均为只读查询，无世界副作用。

### 难度与品质

| Member | Purpose | 调用时机 / 副作用 |
| --- | --- | --- |
| `GetCraftingPartDifficulty(CraftingPiece)` | 单块部件难度 = `PieceTier * 50`（空部件为 0）。 | UI 显示部件难度时；纯函数。 |
| `CalculateWeaponDesignDifficulty(WeaponDesign)` | 按 Blade/Guard/Handle/Pommel 权重（100/20/60/20）汇总所有已用部件难度并加权平均，得整把武器难度（约 0–100）。 | 锻造前预览、品质抽取、精力计算；注意退化设计可能除零。 |
| `GetCraftedWeaponModifier(WeaponDesign, Hero)` | 据设计难度 + 铁匠 Crafting 技能 + ExperiencedSmith/MasterSmith/LegendarySmith 等 Perk 计算品质概率，抽取 `Template.ItemModifierGroup` 中的 `ItemModifier`。 | 锻造落武器时；含 `MBRandom` 随机，同输入不同次结果可能不同。 |
| `ResearchPointsNeedForNewPart(int, int)` | 解锁下一个部件所需研究点 = `sqrt(100/totalPartCount) * (openedPartCount*9 + 10)`。 | 部件研究界面；纯函数。 |

### 材料消耗与产出

| Member | Purpose | 调用时机 / 副作用 |
| --- | --- | --- |
| `GetSmithingCostsForWeaponDesign(WeaponDesign)` | 返回长度 9 的 `int[]`，每格为对应 `CraftingMaterials` 的净需求（**负值=消耗**），`array[8]` 固定 -1 表示设计本身。 | 锻造预览/扣材料前；纯读取。 |
| `GetSmeltingOutputForItem(ItemObject)` | 返回长度 9 的 `int[]`，熔炼该物品回收的材料数量（**正值=回收**），读取 `item.WeaponDesign.UsedPieces`。 | 熔炼预览/回收前；纯读取。 |
| `GetCraftingMaterialItem(CraftingMaterials)` | 把材料枚举映射到 `DefaultItems` 的具体 `ItemObject`（如 `IronOre→DefaultItems.IronOre`、`Iron1→DefaultItems.IronIngot1`）。 | 把材料数组转成可入背包的 `ItemObject`；纯映射。 |

### 精炼

| Member | Purpose | 调用时机 / 副作用 |
| --- | --- | --- |
| `GetRefiningFormulas(Hero)` | 返回该铁匠可用的精炼配方序列；`CharcoalMaker`/`IronMaker`/`SteelMaker`(+2/+3) 等 Perk 决定高一级配方的可用性。 | 精炼 UI 与 `DoRefinement`；只读 `Hero` Perk。 |
| `GetSkillXpForRefining(ref Crafting.RefiningFormula)` | 精炼经验 = `0.3 * 输出材料.Value * 输出数量`。 | 精炼完成后结算经验。 |

### 精力消耗（铁匠体力）

| Member | Purpose | 调用时机 / 副作用 |
| --- | --- | --- |
| `GetEnergyCostForRefining(ref Crafting.RefiningFormula, Hero)` | 基础 6，`PracticalRefiner` Perk 加因子，返回 `int` 精力。 | 精炼前检查/扣减体力（扣减在行为层）。 |
| `GetEnergyCostForSmithing(ItemObject, Hero)` | 基础 `10 + 5 * Tier`，`PracticalSmith` Perk 加因子。 | 锻造前检查/扣减体力。 |
| `GetEnergyCostForSmelting(ItemObject, Hero)` | 基础 10，`PracticalSmelter` Perk 加因子。 | 熔炼前检查/扣减体力。 |

### 技能经验

| Member | Purpose | 调用时机 / 副作用 |
| --- | --- | --- |
| `GetSkillXpForSmelting(ItemObject)` | 熔炼经验 = `0.02 * item.Value`。 | 熔炼后 `hero.AddSkillXp(DefaultSkills.Crafting, …)` 的输入。 |
| `GetSkillXpForSmithingInFreeBuildMode(ItemObject)` | 自由锻造经验 = `0.02 * item.Value`。 | 自由模式锻造后结算。 |
| `GetSkillXpForSmithingInCraftingOrderMode(ItemObject)` | 订单锻造经验 = `0.1 * item.Value`。 | 订单模式锻造后结算（与订单经验叠加）。 |

### 部件研究

| Member | Purpose | 调用时机 / 副作用 |
| --- | --- | --- |
| `GetPartResearchGainForSmeltingItem(ItemObject, Hero)` | 熔炼研究点 = `1 + round(0.02 * Value)`，`CuriousSmelter` Perk 加因子。 | 熔炼后累积可解锁部件的研究点。 |
| `GetPartResearchGainForSmithingItem(ItemObject, Hero, bool isFreeBuildMode)` | 锻造研究点 = `1 + floor(0.1 * Value * 因子)`，`CuriousSmith` Perk 生效，自由模式额外 +0.1 因子。 | 锻造后累积研究点。 |

## 示例

### 示例 1：预览熔炼一把武器能回收哪些材料

```csharp
// 在铁匠铺或调试指令里，先确认战役已加载，再读取主角的主手武器并查询熔炼产出。
if (Campaign.Current == null || Hero.MainHero == null)
{
    return;
}

EquipmentElement element = Hero.MainHero.BattleEquipment[EquipmentIndex.Weapon0];
if (!element.IsValid() || element.Item == null || element.Item.WeaponDesign == null)
{
    return;
}

SmithingModel smithing = Campaign.Current.Models.SmithingModel;
int[] smeltingOutput = smithing.GetSmeltingOutputForItem(element.Item);
for (int i = 0; i < smeltingOutput.Length; i++)
{
    if (smeltingOutput[i] != 0)
    {
        ItemObject material = smithing.GetCraftingMaterialItem((CraftingMaterials)i);
        // material.Name + " x" + smeltingOutput[i]  即回收到的材料与数量
    }
}
```

这与 `CraftingCampaignBehavior.DoSmelting` 内部循环（`GetSmeltingOutputForItem` → `GetCraftingMaterialItem` → `ItemRoster.AddToCounts`）的查询顺序一致；只读返回，不会改动背包。

### 示例 2：锻造前预估精力、难度与经验

```csharp
// 自由锻造确认前，用 Crafting.GenerateItem 生成一个临时预览 ItemObject（与锻造 UI 内部一致），
// 再让 SmithingModel 算出这把设计会消耗的体力、奖励的经验与整体难度。
if (Campaign.Current == null || hero == null || weaponDesign == null)
{
    return;
}

SmithingModel smithing = Campaign.Current.Models.SmithingModel;

ItemObject previewItem = new ItemObject();
Crafting.GenerateItem(weaponDesign, new TextObject("Preview"), hero.Culture, null, ref previewItem);
if (previewItem == null)
{
    return;
}

int designDifficulty = smithing.CalculateWeaponDesignDifficulty(weaponDesign);
int staminaCost = smithing.GetEnergyCostForSmithing(previewItem, hero);
int skillXp = smithing.GetSkillXpForSmithingInFreeBuildMode(previewItem);
int[] materialCost = smithing.GetSmithingCostsForWeaponDesign(weaponDesign);

// 真正落地（扣体力、给经验、回收/扣材料、生成入背包）必须走 CraftingCampaignBehavior，
// 不要在此处直接 new ItemObject 塞 Equipment。
```

`Crafting.GenerateItem` 是 `TaleWorlds.Core.Crafting` 的公开静态方法，签名 `(WeaponDesign, TextObject, BasicCultureObject, ItemModifierGroup, ref ItemObject, string customId = null)`；`hero.Culture` 为 `CultureObject`（继承自 `BasicCultureObject`），可直接传入。

## 版本注记

`SmithingModel` 的抽象契约在 **1.3.15 与 1.4.5 完全一致**（同 18 个 `abstract` 方法，签名未变）。差异只存在于默认实现 `DefaultSmithingModel` 与各 Perk 的数值/配方，替换默认模型时请以当前运行版本的 `DefaultSmithingModel.cs` 为准。

## 导航

- ↑ 父级：[campaign-ext 模型索引](../)
- ↔ 同级：[PartySpeedModel](../PartySpeedModel) · [CharacterDevelopmentModel](../CharacterDevelopmentModel) · [GameModels](../GameModels) · [CraftingCampaignBehavior](../CraftingCampaignBehavior)
- 相关：[Campaign](../../campaign/Campaign) · [Hero](../../campaign/Hero) · [Settlement](../../campaign/Settlement) · [ItemObject](../../core/ItemObject) · [Equipment](../../core-extra/Equipment) · [WeaponDesign](../../core-extra/WeaponDesign)
