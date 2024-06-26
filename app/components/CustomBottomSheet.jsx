import React, { forwardRef } from "react"
import { StyleSheet, View } from "react-native"
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet"
import { COLORS } from "../utils/constants"

const CustomBottomSheet = forwardRef(({ children }, ref) => {
	return (
		<BottomSheet
			ref={ref}
			enableDynamicSizing
			enablePanDownToClose
			index={-1}
			keyboardBehavior="interactive"
			keyboardBlurBehavior="restore"
			backdropComponent={props => (
				<BottomSheetBackdrop disappearsOnIndex={-1} pressBehavior={"close"} {...props} />
			)}
			handleStyle={{ display: "none" }}
			backgroundStyle={styles.backgroundStyle}
			enableOverDrag={false}
		>
			<BottomSheetView style={styles.container}>
				<View style={{ paddingTop: 12 }} />
				{children}
			</BottomSheetView>
		</BottomSheet>
	)
})

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: COLORS.DARK_BOTTOM_BG,
		borderTopLeftRadius: 35,
		borderTopRightRadius: 35
	},
	container: {
		paddingBottom: 15,
		height: "auto"
	}
})

export default CustomBottomSheet
