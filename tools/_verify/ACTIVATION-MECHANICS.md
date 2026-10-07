# ★ 两条「决定工作算不算数」的机械要求（抄给三条写作线）

> 来源：lead-145zh 于 2026-10-07 实测查清，boss-3 #12561 裁定「立刻写进 brief 与判分器说明，并抄给另两条写作线」。
> 这两条**比内容风格重要得多**：它们决定一份已经写完的深页会不会被 census / 门禁**记上**。
> 本文件是**新增**文件，不改动 `DISPATCH-TEMPLATE.md` 等正在被其它线消费的共享输入（见该模板 §5）。

---

## 机制① 档位标记扫描【整个文件，含 frontmatter】

```text
判据位置：tools/_verify/classify-tiers.mjs
判据原文：text.includes('的自动生成类参考')
          text.includes('的自动生成战役动作参考')
          text.includes('Auto-generated class reference')
          text.includes('Auto-generated campaign action reference')
          /<!--\s*v.*-skeleton\s*-->/is
```

**`text` 是整个文件，不是正文。** 所以 `description`（在 frontmatter 里）也算。

### 后果（实例，可复算）
```
content/v1.4.5/zh/api/campaign-ext/SellGoodsForTradeAction.md
  正文：已写满 6,261B 深页小节（概述/心智模型/怎么用/依赖/风险）
  description：「SellGoodsForTradeAction 的自动生成战役动作参考。」
  ⇒ census 仍记 tier = generated
```
**正文写得再深，只要 `description` 还留着那个串，这一页就永远留在 `generated` 档。**

### 动作
把壳页改写成深页时，**必须同时改写 `description`**：
- 删掉「的自动生成类参考。」「的自动生成战役动作参考。」「Auto-generated …」这些串；
- 换成一句**真正描述这个类做什么**的话。

### 自检
```bash
grep -n "的自动生成\|Auto-generated" <页>   # 必须 0 命中
```

---

## 机制② `classifyPage` 的 `deep_pass` 要求【参见/依赖 小节里 ≥2 条 markdown 链接】

```text
判据位置：tools/lib/handwritten-policy.mjs
依赖小节正则：/^#{2}\s+(?:依赖|依赖关系|依赖图|依赖关联|Dependencies|Dependency|参见|See\s*Also|Related)\s*$/imu
链接要求：   countMdLinks(sectionBody(text, DEP_OR_SEE_HEADING_RE)) >= 2
失败理由串： dependency-section-no-links / weak-deps
```

### 后果（实例，可复算）
```
MakePregnantAction.md          → stub ["dependency-section-no-links","weak-deps"]
SellItemsAction.md             → stub ["dependency-section-no-links","weak-deps"]
SellGoodsForTradeAction.md     → stub ["dependency-section-no-links","weak-deps"]
```
这三页**写了「依赖」小节，但里面一条链接都没有** ⇒ 判不过。
注意 `sectionBody` 在下一个 `#`/`##` 标题处截断 ⇒ **链接必须写在该小节内部**，
写在后面的「导航」小节里不算。

### ⚠ 与政策 #12289 的冲突（已知，等 boss 裁定）
boss-3 #12289 规定本轮写作**不写跨页 markdown 链接** ⇒ 与机制② **互斥**：
政策生效后任何新页都拿不到 `deep_pass`。
但 **census 的 `tier` 不看链接**（只看体量 + 无生成标记）⇒ 会出现
**「`tier=deep` 涨 N 页、`deep_pass` 涨 N-1 页」而无人能解释差的那一页**。

**⇒ 报数时必须【分开报两个口径】，永不合并：**
```
deep_pass      = classifyPage 口径（机械门禁）
tier           = census 口径（站点档位）
```

---

## 附：七节契约是【前向】的（boss-3 #12561 裁定）

`概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 【参见族】 / 导航`

- **新页按七节执行**；**不要把「六节齐全数」当旧页的质量指标**——在旧页上它必然为 0，会误导。
  实测：`content/{v1.4.5,v1.3.15,v1.3.0}/zh` 有 H2 的页 **20465** 张，七节全齐 **0** 张，六节宽松 156 张。
- **参见族 = `参见` | `依赖关系` | `依赖图` | `依赖`**（boss-3 #12561 裁定）。
  出处不是「语义相近」，而是本仓自己的共现证据：
  `tools/_verify/DISPATCH-TEMPLATE.md` §0.0 —— 非空壳 2,750 页里 **342 页**同页共现 ≥2 个。
  ⚠ 该归并方向是【把缺判成有】，是本仓最危险的一类合并
  ⇒ 报数时**必须打印实际命中的是哪个别名**（如 `via=依赖关系`），让「参见已齐」可审计而非隐形。
